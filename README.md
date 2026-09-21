# Solventa · prototipo navegable

Un repo, dos canales. El sistema de diseño y los datos de ejemplo son compartidos.

```
index.dc.html               portada, dos entradas
movil/index.dc.html         mapa de navegación del canal móvil
movil/onboarding.dc.html    activación del teléfono y biometría (15 pantallas)
movil/acceso.dc.html        acceso recurrente (5 pantallas)
movil/billetera.dc.html     pólizas sin conexión y sincronización (4 estados)
movil/app-solventa.dc.html  siniestros, perfil y política (8 pantallas)
web/index.dc.html           mapa de navegación del canal web
web/cliente.dc.html         portal del cliente (17 pantallas)
web/operador.dc.html        back-office del analista (12 pantallas)
_ds/                        sistema de diseño Solventa (copia única)
datos.js                    fuente única de datos de ejemplo
```

Los `index.html` de cada carpeta son redirecciones para que GitHub Pages sirva el
`.dc.html` correspondiente. No contienen diseño.

## Deep links

- **movil/onboarding:** `#login`, `#no-cuenta`, `#consentimiento`, `#no-continuar`,
  `#cedula`, `#permiso`, `#liveness`, `#error-red`, `#verificado`,
  `#no-verificado`, `#agotado`, `#biometria`, `#dialogo`, `#sin-biometria`,
  `#ahora-no`.
- **movil/acceso:** `#bloqueo`, `#fallida`, `#bloqueo-temporal`, `#contrasena`,
  `#cambio-biometria`.
- **movil/billetera:** `#lista`, `#credencial`, `#vacio`, `#cancelada`.
- **movil/app-solventa:** `#registrar`, `#evidencia`, `#asistencia`, `#estado`,
  `#push`, `#pago`, `#billetera`, `#perfil`, `#acceso`, `#politica`.
- **web/cliente:** `#login`, `#registro-datos`, `#registro-credenciales`,
  `#registro-correo`, `#politica`, `#recuperar`, `#catalogo`, `#cotizar`,
  `#cotizacion`, `#pago`, `#emitida`, `#polizas`, `#poliza`, `#siniestros`.
- **web/operador:** `#resumen`, `#cartera`, `#poliza`, `#renovar`, `#modificar`,
  `#cancelar`, `#resultado`, `#siniestros`, `#siniestro`, `#auditoria`,
  `#reportes`, `#reaseguro`.

Cada pantalla tiene además controles de demostración fuera del marco para ver los
estados de error, vacío y bloqueado sin tocar la URL.

## Decisiones cerradas

- **Acceso** con correo y contraseña. El código de un solo uso solo confirma el
  correo en el registro web.
- **Titular canónico:** Camila Rojas Peña. Póliza de viaje #SLV-2026-08341,
  vigencia 12 mar 2026 – 12 mar 2027, prima $52.000, cobertura máxima
  $60.000.000. Hoy = 20 sep 2026. Todo en `datos.js`.
- **Estados de póliza:** vigente, por renovar, en revisión, vencida y cancelada.
  Las acciones se habilitan según la tabla de reglas en `datos.js`, y cuando
  están deshabilitadas se explica por qué.
- **El perito decide en la consola de operador.** El cliente solo ve el estado,
  en la app y en su portal.
- **Auditoría:** un módulo con filtro por tipo, usuario, póliza y periodo.
- **Género:** se pide por razones demográficas y no afecta la prima. La edad sí.
- **Reportes:** se generan y se descargan en CSV. El de reaseguradoras no se
  envía solo: se marca como enviado a mano.

## Historias cubiertas

| Historia | Dónde |
|---|---|
| #87 activación con selfie | movil/onboarding |
| #88 acceso con huella o rostro | movil/onboarding, movil/acceso, app-solventa#perfil |
| #89 consentimiento | movil/onboarding#consentimiento, app-solventa#politica |
| #90 coberturas sin conexión | movil/billetera |
| #91 sincronización | movil/billetera |
| #106 renovar | web/operador#renovar |
| #107 modificar | web/operador#modificar |
| #108 cancelar | web/operador#cancelar |
| #109 historial de la póliza | web/operador#poliza |
| #110 reporte regulatorio | web/operador#reportes |
| #111 reporte para reaseguradoras | web/operador#reaseguro |
| #112 auditoría | web/operador#auditoria |

## Pendiente de confirmar

1. El titular canónico se unificó en Camila Rojas Peña; falta contrastarlo con la
   pantalla de emisión F1.3 del sitio anterior.
2. Qué hace la tarifa cuando alguien elige "Prefiero no decirlo" en género.
