# Solventa · Ajustes de diseño según las historias de usuario

Brief para Claude Design. Lista **solo los cambios de diseño** que hay que hacer en los prototipos existentes y las pantallas que hay que crear. Las reglas de negocio ya están escritas en las historias (issues #87 a #91 y #106 a #112). Aquí solo se indica cómo debe verse y comportarse la interfaz.

- **Sitio actual:** https://asr88.github.io/githubPagesProjectFinal/index.html
- **Épicas:** E3 (móvil) y E5 (web)

---

## 1. Reglas generales

1. Conserva el **design system de Solventa** (`_ds/solventa-design-system-…`): tokens y componentes existentes (`Badge, Button, Card, IconButton, PolicyCard, StatBlock, Tag, DataTable, KeyValue, Timeline, Callout, Dialog, ProgressSteps, Toast, Checkbox, Field, Input, RadioGroup, Select, Switch, SideNav, TabBar, Tabs, TopBar, Phone`).
2. **Falta un campo de contraseña.** Crea una variante de `Input` tipo contraseña, con botón mostrar y ocultar, usando los mismos tokens.
3. Mantén el formato: **páginas HTML estáticas, autocontenidas y navegables**, sin backend. Simula los estados con parámetros o controles de demostración, como ya hacen el onboarding y la billetera.
4. Voz de marca: español de Colombia, frases cortas, sin tecnicismos.
5. Diseña también los **estados de error, vacío y bloqueado**, no solo el camino feliz.
6. Actualiza `index.html` con los enlaces a lo nuevo.
7. Unifica los **datos de ejemplo** (sección 5).

**Referencias de comportamiento (ya definidas en las historias):**
- Acceso alterno a la biometría: la contraseña de la cuenta web.
- Máximo 3 intentos de verificación de identidad y 3 de biometría; bloqueo biométrico de 5 minutos.
- Ventana de renovación: 30 días antes del vencimiento.
- En la consola web opera un analista autorizado; el cliente recibe correos.
- Reportes: se generan y se descargan en CSV.

Estados de póliza (web):

| Estado | Renovar | Modificar | Cancelar |
|---|---|---|---|
| Vigente | Solo dentro de la ventana | Sí | Sí |
| Por renovar | Sí | Sí | Sí |
| Vencida | No | No | No |
| Cancelada | No | No | No |

---

## 2. Móvil (E3)

Archivos base:
- Onboarding: `movil/onboarding/prototipo/` (parámetros: `outcome` = `verificado`, `no-verificado`, `primero-falla`; `demoControls`; `livenessAuto`)
- Billetera: `movil/billetera/Billetera Offline.dc.html` (parámetros: `reconnectDelayMs`, `syncDurationMs`, `showControls`, `holderName`)
- UI kit: `movil/onboarding/ui-movil/`

### 2.1 Consentimiento (HU3.1.3, #89)

Pantalla actual: paso 1 de 3, "Antes de empezar", con documento, rostro y ubicación, y un checkbox de datos biométricos.

- El consentimiento habla **solo de datos biométricos**. Saca la ubicación de ese bloque, o muéstrala aparte con su propio texto.
- Añade una línea sobre **cuánto se conservan los datos, cómo se protegen y cómo se revoca** ("Puedes retirar tu consentimiento desde Perfil").
- Añade el enlace **"Leer política de tratamiento de datos"** y la **versión del texto** en el pie ("Versión 1.0").
- Checkbox desmarcado por defecto y botón "Aceptar y continuar" deshabilitado hasta marcarlo (ya funciona así, mantenlo).
- Añade el botón secundario **"No acepto"**.
- **Pantalla nueva "No podemos continuar":** explica que sin el consentimiento no se puede seguir con el registro móvil. Botones: "Continuar en el canal web", "Hablar con soporte" y "Volver".

### 2.2 Activación con selfie (HU3.1.1, #87)

**Antes de la bienvenida (pantallas nuevas):**
- **Inicia sesión:** correo, contraseña y botón principal.
- **No encontramos tu cuenta:** mensaje de que primero debe registrarse en el canal web y un enlace a `e1-onboarding/registro.html`.

**Paso 2 (cédula):** no lo cambies.

**Paso 3 (prueba de vida):**
- **Pantalla nueva:** permiso de cámara, con una explicación de para qué se usa y botón "Permitir".
- Indica que se usa la **cámara frontal**.
- Añade un segundo gesto posible (giro de cabeza) además de "Parpadea ahora".
- **Estado nuevo:** tiempo agotado o error de red ("No pudimos verificarte ahora. Revisa tu conexión e inténtalo de nuevo"), que no cuenta como intento fallido.
- Añade una línea: **"Tu selfie no se guarda en tu teléfono."**

**Resultado verificado:**
- Cambia el texto a **"Este dispositivo quedó vinculado a tu cuenta"**.
- Mantén el folio (`#SLV-…`) y la fecha.

**Resultado no verificado:**
- Muestra el **número de intento** ("Intento 1 de 3").
- "Intentar de nuevo" **vuelve a la selfie**, no a la cédula.
- **Pantalla nueva "Intentos agotados"** tras el tercer fallo: mensaje y solo la opción "Hablar con soporte".
- Añade un valor de `outcome` (por ejemplo `agotado`) para verla.

### 2.3 Acceso con huella o rostro (HU3.1.2, #88)

Pantalla actual: "Activa huella o rostro", con "Activar" y "Ahora no".

- Cambia "sin repetir este proceso" por un texto sobre **ingresar sin escribir tu contraseña**.
- Ajusta el título según el dispositivo ("Activa tu huella", "Activa Face ID", "Activa huella o rostro").
- **Estado nuevo:** marco del diálogo nativo del sistema al tocar "Activar" (sin marcas de terceros).
- "Ahora no" lleva al ingreso con contraseña y avisa "Puedes activarlo después en Perfil".
- **Estado nuevo:** el dispositivo no tiene biometría o no está configurada ("Tu teléfono no tiene huella o rostro configurados"), con botón "Usar contraseña".

**Pantallas nuevas (inicio de sesión recurrente):**
1. **Bloqueo de la app:** validación biométrica en primer plano y enlace "Usar contraseña".
2. **Biometría fallida:** mensaje con contador ("Intento 2 de 3").
3. **Bloqueo temporal:** "Bloqueamos la biometría por 5 minutos", con **cuenta regresiva** y el campo de contraseña visible.
4. **Ingreso con contraseña:** campo con mostrar y ocultar, y botón principal.
5. **Perfil > Seguridad:** hoy "Perfil" no tiene contenido. Diseña la pantalla con un `Switch` "Ingresar con huella o rostro".
6. **Cambio de biometría en el dispositivo:** aviso "Detectamos un cambio en la biometría de tu teléfono. Confirma con tu contraseña", con campo y botón "Volver a activar".

### 2.4 Coberturas sin conexión (HU3.2.1, #90)

- La **credencial** (o un detalle offline de la póliza) muestra las **coberturas**: deducible y cobertura máxima, además de ramo, número, vigencia, titular y QR. Estos datos existen en el detalle del UI kit.
- **Última sincronización siempre visible**, también en línea, con fecha y hora. Hoy online solo dice "actualizado hace un momento".
- **Estado nuevo:** primer uso sin conexión y sin datos guardados. Mensaje "Aún no hay pólizas guardadas. Conéctate para descargarlas", sin errores técnicos.
- La sección se llama igual en todas las pantallas ("Tus pólizas").
- Estados de póliza en la lista: además de "Activa", diseña "En revisión".

### 2.5 Sincronización (HU3.2.2, #91)

Problema actual: al reconectar, una **pantalla completa** "Sincronizando cambios…" oculta la lista y la barra de pestañas.

- Cámbiala por un **banner o barra de estado sobre la lista de pólizas**. La lista y las credenciales siguen visibles y abribles. Mantén la barra de pestañas.
- Al terminar, un aviso breve con la **nueva fecha y hora** y, si hubo cambios, "1 póliza actualizada".
- **Caso nuevo:** una póliza renovada, modificada o **cancelada** tras sincronizar. En la cancelada, la credencial deja de mostrarse como válida ("Esta póliza fue cancelada").
- **Estado nuevo:** falla de sincronización ("No pudimos actualizar. Estás viendo la versión del [fecha y hora]. Reintentaremos automáticamente"), sin perder lo que se ve.
- Añade un parámetro (por ejemplo `syncOutcome` = `ok`, `cambios`, `falla`) para ver cada caso.

---

## 3. Web (E5)

Archivos base: `e5-polizas/polizas.html`, `e5-polizas/detalle-poliza.html`, `e5-polizas/confirmar-accion.html?accion=renovar|modificar|cancelar`.

**Navegación:** añade los ítems **Reportes** y **Auditoría** al menú.

### 3.1 Listado (`polizas.html`)
- Añade un filtro por estado (vigente, por renovar, vencida, cancelada) y una búsqueda por número o cliente.
- Usa los mismos nombres de estado que la tabla de la sección 1.

### 3.2 Detalle (`detalle-poliza.html`)
- Los botones "Renovar", "Modificar condiciones" y "Cancelar póliza" se **habilitan o deshabilitan según el estado**, con un texto corto que explica el motivo cuando están deshabilitados ("Solo se puede renovar 30 días antes del vencimiento").
- **Estados nuevos:** póliza vencida y póliza cancelada (con causal y fecha de efecto). En ambas, los tres botones están deshabilitados.
- El bloque "trazabilidad de cambios" pasa a ser el **historial** (3.6).

### 3.3 Renovar (HU5.1.1, #106)
- **Resumen previo:** nueva vigencia y prima recalculada.
- **Lista de validación** con marca de cumple o no cumple: póliza vigente, sin siniestro abierto y pago al día. Si algo no se cumple, el botón de confirmar queda deshabilitado y se ve cuál falla.
- **Resultado exitoso:** mensaje de éxito, nueva vigencia visible y aviso "Notificamos al cliente por correo".
- **Resultado con error:** motivo del fallo y confirmación de que la póliza no cambió.

### 3.4 Modificar (HU5.1.2, #107)
- Los campos modificables se ven editables. Los **no modificables** (prima, vigencia, canal) se ven bloqueados, con un texto que explica por qué.
- **Motivo del cambio obligatorio.**
- Muestra el **valor anterior y el nuevo** antes de confirmar.
- Resultado exitoso y de error, igual que en renovar.
- **Estado nuevo:** póliza no modificable (vencida o cancelada), con el aviso "Esta póliza no permite modificaciones".

### 3.5 Cancelar (HU5.1.3, #108)
- **Causal obligatoria** (solicitud del cliente, falta de pago, fraude detectado), sin valor preseleccionado.
- **Diálogo de confirmación** que advierte que la acción es irreversible.
- **Resultado exitoso:** póliza en estado cancelada, fecha de efecto y aviso de notificación por correo.
- **Resultado con error** y **póliza no cancelable**.
- Cada acción tiene su **propia página o estado**. Hoy las tres comparten la misma página con textos distintos.

### 3.6 Historial de la póliza (HU5.1.4, #109)
En el detalle, del más reciente al más antiguo:
- Cada evento muestra **fecha y hora, usuario o sistema de origen, tipo de evento y resultado** (exitoso o fallido).
- Tipos: emisión, renovación, modificación, cancelación, cambio de estado, notificación enviada.
- En las modificaciones, muestra el valor anterior y el nuevo.
- Solo lectura. Los eventos de renovar, modificar y cancelar aparecen aquí (simulado).

### 3.7 Auditoría (HU5.1.7, #112) · pantalla nueva
- Tabla global de eventos: fecha y hora, usuario, póliza, tipo de evento y resultado.
- **Filtros:** póliza, usuario, tipo de evento y periodo.
- Solo lectura, con un aviso de que los registros no se pueden modificar.
- Cada fila enlaza al detalle de la póliza.

### 3.8 Reporte regulatorio (HU5.1.5, #110) · pantalla nueva
- Selector de **periodo** (inicio y fin) y botón **"Generar reporte"** con descarga CSV.
- **Resumen previo:** periodo, cantidad de registros y fecha y hora de generación. Columnas: número de póliza, evento, fecha, estado anterior y estado nuevo.
- **Estado sin datos:** "No hay eventos en este periodo".
- **Historial de reportes generados:** usuario, periodo, fecha y hora, cantidad de registros.

### 3.9 Reporte para reaseguradoras (HU5.1.6, #111) · pantalla nueva
- Selectores de **reaseguradora** y **periodo**.
- Resumen separado por tipo: altas, renovaciones, modificaciones y cancelaciones.
- Descarga CSV, sin envío automático.
- Control para **marcar como enviado**, con fecha y destinatario.
- **Historial:** usuario, reaseguradora, periodo, fecha y hora, y estado (generado o enviado).

### 3.10 Registro web (`e1-onboarding/registro.html`)
Debajo del correo (que dice "Usa el mismo correo para iniciar sesión más adelante"), añade **Contraseña** y **Confirmar contraseña**, con mostrar y ocultar y una indicación breve de los requisitos.

---

## 4. Datos de ejemplo: unificar

El sitio muestra datos contradictorios. Usa una **fuente única** (sugerencia: la emisión web F1.3, `e1-onboarding/emision.html`; verifícala antes).

| Dato | Diferencias actuales |
|---|---|
| Titular | Ana Restrepo (UI kit móvil), Camila (billetera offline), Camila Rojas Peña (consola web) |
| Póliza de viaje #SLV-2026-08341, vigencia | 12 mar 2026 a 12 mar 2027 (UI kit móvil), 01 ago a 31 dic 2026 (billetera offline), 13 sep a 12 oct 2026 (consola web) |
| Cobertura máxima | $40.000.000 (UI kit móvil), $60.000.000 (consola web) |
| Prima mensual | $52.000 (UI kit móvil), $24.300 (consola web) |
| Ramos en la billetera | Viaje, hogar y auto (UI kit); viaje y protección de dispositivo (billetera offline) |
| Fecha de "hoy" | 12 mar 2026 en móvil, 13 sep 2026 en la web |

---

## 5. Entregables

1. Pantallas y estados nuevos o modificados de las secciones 2 y 3.
2. `index.html` con los enlaces a lo nuevo.
3. Parámetros o controles de demostración para ver cada estado.
4. Datos de ejemplo unificados.
5. Un resumen breve de los archivos cambiados y los nuevos.
