# Product Backlog — Solventa (Grupo 3)

Historias de usuario (HU) del Product Backlog del proyecto Solventa (MISW4501/MISW4502 Grupo 3).
Fuente: tablero `misw4501-grupo3-solventa-board` → vista "Curso 2 Product Backlog" (Projects #1, view 15), a partir de los issues del repositorio `dzamoranouniandes/misw4501-grupo3-solventa-backend`.

Estructura: **Épica (E#> → Feature (F#.#) → Historias de Usuario (HU)**.
Total: 5 épicas, 10 features, **55 historias de usuario**, todas en estado `open`.

---

## Índice

- [E1 — Onboarding, cotización y adquisición de pólizas (Web)](#e1--onboarding-cotización-y-adquisición-de-pólizas-web)
  - [F1.1 Registro inicial del cliente + consentimiento](#f11--registro-inicial-del-cliente-con-datos-básicos--check-de-consentimiento)
  - [F1.2 Cotización por Open Finance](#f12--cotización-por-open-finance--open-data)
  - [F1.3 Adquisición de pólizas](#f13--adquisición-de-pólizas)
- [E2 — Onboarding de socios y venta asistida (Web)](#e2--onboarding-de-socios-y-venta-asistida-web)
  - [F2.1 Onboarding de socios y gestión de credenciales](#f21--onboarding-de-socios-y-gestión-de-credenciales)
  - [F2.2 Venta asistida por API](#f22--venta-asistida-desde-canales-de-terceros)
- [E3 — Acceso seguro y autogestión en movilidad (Mobile)](#e3--acceso-seguro-y-autogestión-en-movilidad-mobile)
  - [F3.1 Activación y acceso biométrico en app móvil](#f31--activación-y-acceso-biométrico-en-app-móvil)
  - [F3.2 Billetera de pólizas móvil sin conexión](#f32--billetera-de-pólizas-móvil-sin-conexión)
- [E4 — Siniestros y respuesta inmediata (Mobile)](#e4--siniestros-y-respuesta-inmediata-mobile)
  - [F4.1 Gestión y reporte de siniestros](#f41--gestión-y-reporte-de-siniestros)
  - [F4.2 Siniestros paramétricos y notificaciones](#f42--siniestros-paramétricos-y-notificaciones)
- [E5 — Gestión del ciclo de vida póliza (Web)](#e5--gestión-del-ciclo-de-vida-póliza-web)
  - [F5.1 Gestión del ciclo de vida de pólizas](#f51--gestión-del-ciclo-de-vida-de-pólizas)

---

# E1 — Onboarding, cotización y adquisición de pólizas (Web)

**Issue de la épica:** [#14](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/14)

## F1.1 — Registro inicial del cliente con datos básicos + check de consentimiento

**Issue de la feature:** [#15](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/15)

### HU1.1.1-Registro de nuevo cliente asegurado vía web — [#53](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/53)

**Fecha de origen:** 2026-08-20 | **Estado:** open

**Descripción**

**Como** Cliente Asegurado

**Quiero** ingresar mis datos básicos de contacto y visualizar de manera clara el consentimiento legal para el tratamiento de mi información

**Para** iniciar mi vinculación con Solventa de forma transparente, informada y conforme a las normas de protección de datos.

**Criterios de Aceptación**

- El sistema debe permitir el registro de nuevos clientes mediante un formulario en la interfaz web con los siguientes campos: nombres, apellidos, tipo de documento (CC), número de identificación, correo electrónico, password, fecha de nacimiento, país de residencia, teléfono de contacto.
- El formulario debe tener un botón para confirmar, el cual debe estar bloqueado hasta que el cliente complete el formulario.
- El sistema debe crear el registro del cliente después de la confirmación y permitir su entrada al home de la aplicación para gestionar sus productos, cotizar productos o hacer solicitudes de nuevos productos.

### HU1.1.2-Otorgar consentimiento de uso de datos — [#113](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/113)

**Fecha de origen:** 2026-08-23 | **Estado:** open

**Descripción**

**Como** Cliente Asegurado

**Quiero** otorgar de forma explícita el consentimiento legal para el tratamiento de mi información

**Para** completar mi vinculación y usar los canales de Solventa conforme a las normas de protección de datos.

**Criterios de Aceptación**

- El sistema debe presentar al cliente un enlace que muestre el texto legal completo del consentimiento de uso de datos y las políticas de Open Finance.
- El sistema debe presentar al cliente un checkbox para dar consentimiento explícito de uso de datos. El checkbox debe iniciar desmarcado por defecto.
- El sistema debe actualizar la auditoria del consentimiento del cliente generando una nueva entrada con los siguientes campos: tipo de acción (en este caso aceptación), fecha y hora exacta del evento con zona horaria, versión de los términos y el canal utilizado (web).
- El sistema debe actualizar el estado actual del consentimiento a aceptado.

### HU1.1.3-Auditoría del consentimiento de uso de datos — [#54](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/54)

**Fecha de origen:** 2026-08-20 | **Estado:** open

**Descripción**

**Como** Asesor / Operador (Cumplimiento y Legal)

**Quiero** consultar de manera centralizada el registro de consentimiento de datos explícito de los clientes

**Para** atender auditorías de entes regulatorios o responder a reclamaciones del cliente garantizando la veracidad de la operación.

**Criterios de Aceptación**

- El sistema debe guardar en una auditoría el consentimiento de uso de datos de todos los clientes con los siguientes campos: tipo de acción (en este caso aceptación), fecha y hora exacta del evento con zona horaria, versión de los términos y el canal utilizado (web).
- El sistema debe presentar una interfaz web para el Asesor / Operador (Cumplimiento y Legal) que le permita visualizar la auditoría de consentimiento de los clientes.
- La interfaz debe tener un campo de búsqueda para ingresar el número de identidad del cliente o el correo electrónico, y un botón para iniciar la búsqueda del registro.
- El sistema debe mostrar el resultado de la búsqueda desplegando los datos de auditoría del consentimiento, que es un log de eventos ordenado por fecha descendente con campos como: tipo de acción (aceptación o revocación), fecha y hora exacta del evento con zona horaria, versión de los términos y el canal utilizado (web).
- La auditoría del consentimiento NO debe poder ser modificada por el Asesor / Operador (solo lectura) para evitar fraudes o pérdida de linaje de datos.

### HU1.1.4-Revocación de consentimiento de datos — [#55](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/55)

**Fecha de origen:** 2026-08-20 | **Estado:** open

**Descripción**

**Como** Cliente Asegurado

**Quiero** revocar de manera autónoma mi consentimiento de tratamiento de datos personales y financieros

**Para** asegurar que mi información sensible deje de ser consultada por el motor de perfilamiento de Solventa, protegiendo mi privacidad bajo las normas de Habeas Data.

**Criterios de Aceptación**

- El sistema debe ofrecer un módulo de gestión de pérfil en la interfaz web con un botón que le permita al cliente revocar su consentimiento de uso de datos previamente otorgado.
- Al hacer click en revocar, el sistema se debe presentar un mensaje de confirmación que le advierta explícitamente al cliente que la revocación suspenderá ofertas personalizadas y anulará cálculos de riesgo individualizados de productos vigentes (como el seguro de vida hipotecario).
- El sistema debe actualizar la auditoria del consentimiento del cliente generando una nueva entrada en el log de eventos con los siguientes campos: tipo de acción (en este caso revocación), fecha y hora exacta del evento con zona horaria, versión de los términos y el canal utilizado (web).
- El sistema debe actualizar el estado actual del consentimiento a revocado.

### HU1.1.5-Consulta de estado actual del consentimiento de datos — [#56](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/56)

**Fecha de origen:** 2026-08-20 | **Estado:** open

**Descripción**

**Como** Cliente Asegurado

**Quiero** consultar el estado actual mi consentimiento de tratamiento de datos personales y financieros

**Para** informarme si actualmente mi información está siendo consultada o perfilada por el motor de cotización de Solventa.

**Criterios de Aceptación**

- El sistema debe mostrar el estado actual del consentimiento de uso de datos (aceptado o revocado).

[Volver al índice](#índice)

---

## F1.2 — Cotización por Open Finance / Open Data

**Issue de la feature:** [#16](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/16)

### HU1.2.1-Consultar ramos de seguros — [#95](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/95)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** Cliente Asegurado

**Quiero** consular los ramos de seguros disponibles con sus condiciones

**Para** entender las coberturas que ofrece Solventa y si se ajusta a mi necesidad.

**Criterios de Aceptación**

- El sistema debe presentar al cliente una interfaz web que permita seleccionar en un listado de ramos de seguros disponibles, inicialmente con el ramo de seguro de vida hipotecario.
- Cada ramo de seguro debe tener un botón para visualizar en una ventana modal un mensaje legal que describa las condiciones y qué información financiera será consultada a través de Open Finance / Open Data para realizar cotización.
- Según el tipo de ramo, la interfaz debe cargar dinámicamente campos de parámetros del seguro, por ejemplo para el seguro de vida hipotecario solo se pide el valor de la vivienda (monto).

### HU1.2.2-Actualizar reglas de pricing del producto de seguro de vida hipotecario — [#58](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/58)

**Fecha de origen:** 2026-08-20 | **Estado:** open

**Descripción**

**Como** Asesor / Operador (Actuaría)

**Quiero** cambiar las reglas de pricing del producto del seguro de vida hipotecario

**Para** tener actualizada la oferta del seguro de vida hipotecario con tarifas más competitivas y con adherencia a la regulación.

**Criterios de Aceptación**

- El sistema debe permitir al Operador (Actuaría) ajustar la formula del precio y los parámetros del algoritmo de pricing del seguro de vida hipotecario.
- El sistema debe registrar el cambio del algoritmo de pricing en una auditoria con los siguientes campos: fecha del cambio, número de versión del algoritmo, cambios realizados a la fórmula y parámetros del algoritmo.

### HU1.2.3-Solicitud de cotización de un ramo de seguro — [#57](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/57)

**Fecha de origen:** 2026-08-20 | **Estado:** open

**Descripción**

**Como** Cliente Asegurado

**Quiero** solicitar una cotización personalizada del ramo de seguros seleccionado

**Para** obtener una cobertura rápida y contextualizada a mi necesidad de aseguramiento.

**Criterios de Aceptación**

- El sistema debe presentar al cliente una interfaz web que permita seleccionar en un listado de ramos de seguros disponibles, inicialmente con el ramo de seguro de vida hipotecario.
- Cada ramo de seguro debe tener un botón para visualizar en una ventana modal un mensaje legal que describa las condiciones y qué información financiera será consultada a través de Open Finance / Open Data para realizar cotización.
- Según el tipo de ramo, la interfaz debe cargar dinámicamente campos para que el cliente ingrese los parámetros del seguro, por ejemplo para el seguro de vida hipotecario solo se pide el valor de la vivienda (monto).
- La interfaz debe tener un botón para enviar la solicitud de cotización, el cual solo debe estar habilitado una vez que se seleccione un ramo y todos sus parámetros han sido diligenciados.
- Al recibir la solicitud de cotización, el sistema debe calcular la prima mensual del ramo seleccionado utilizando las fuentes de datos Open Finance / Open Data requeridas y las reglas de cálculo de precios de ese ramo seleccionado.
- Después terminar la cotización, la interfaz web debe mostrar al cliente el valor de la prima mensual en la moneda local, desglosando con claridad: la prima base del ramo, las deducciones/recargos, el motivo de la deducción/recargo (explicación breve), y los impuestos.

### HU1.2.4-Perfilamiento y cálculo de precio de seguro de vida hipotecario — [#59](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/59)

**Fecha de origen:** 2026-08-20 | **Estado:** open

**Descripción**

**Como** Cliente Asegurado

**Quiero** que el sistema calcule el precio de un seguro de vida hipotecario basado en mi perfil financiero (Open Finance) y datos de contexto (Open Data)

**Para** que me entregue una tarifa de seguro más competitiva y justa.

**Criterios de Aceptación**

- El sistema debe generar un perfil financiero del cliente al recibir una solicitud de cotización usando datos del proveedor de Open Finance.
- Solo se debe consultar datos de proveedor Open Finance únicamente si el estado del consentimiento de uso de datos del cliente se encuentra activo (no ha sido revocado).
- El sistema debe integrar datos del proveedor de Open Finance como ingresos, ahorros, endeudamiento y sobregiros para la realización del cálculo de la prima del seguro.
- Si el proveedor de Open Finance se encuentra caído o con interrupciones, el motor de cotización debe calcular el precio de la prima del seguro sin la personalización, en vez de cancelar la solicitud o bloquear el proceso.
- El sistema debe consultar la fuente de Open Data disponible.
- El sistema debe integrar datos de la fuente Open Data como estadísticas socio-demográficas, climáticas o territoriales que afecten directamente al tipo de seguro y que le permitan realizar del cálculo de la prima del seguro.
- Si la fuente Open Data se encuentra caída o con interrupciones, el motor de cotización debe calcular el precio de la prima del seguro utilizando valores por defecto previamente consultados, en vez de cancelar la solicitud o bloquear el proceso.
- El sistema debe aplicar la última fórmula de precio y parámetros del algoritmo de pricing para calcular la prima del seguro y generar la cotización al cliente.

### HU1.2.5-Auditoría actuarial de cotizaciones — [#60](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/60)

**Fecha de origen:** 2026-08-20 | **Estado:** open

**Descripción**

**Como** Asesor / Operador (Actuaría)

**Quiero** acceder al histórico completo y detallado de cada cotización y perfilamiento generado por sistema

**Para** justificar, explicar y reconstruir al 100% el cálculo de la prima ante auditorías actuariales o requerimientos de los entes reguladores.

**Criterios de Aceptación**

- El sistema debe almacenar en una auditoría cada cotización generada con los siguientes campos: variables exactas recolectadas de Open Finance, los datos públicos de Open Data, la versión del algoritmo de pricing activo y las reglas actuariales aplicadas.
- El sistema debe presentar una interfaz web para el usuario Asesor / Operador (Actuaría) que le permita visualizar la auditoria actuarial de las cotizaciones.
- La interfaz debe tener un campo de búsqueda para ingresar el número de identidad del cliente o el identificador único (UUID) de la cotización, y un botón para iniciar la búsqueda del registro.
- El sistema debe mostrar el resultado de la búsqueda desplegando la fórmula exacta ejecutada para esa cotización, las variables utilizadas con su fuente, fecha de cotización y la versión del algoritmo.
- La auditoría actuarial de las cotizaciones NO debe poder ser modificada por el Asesor / Operador (solo lectura) para evitar fraudes o pérdida de linaje de datos.

[Volver al índice](#índice)

---

## F1.3 — Adquisición de pólizas

**Issue de la feature:** [#17](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/17)

### HU1.3.1-Ver condiciones de la poliza — [#61](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/61)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** cliente que ya cotizo un seguro

**Quiero** ver las condiciones generales y particulares de la poliza

**Para** revisar lo que voy a contratar.

**Criterios de Aceptación**

- El sistema muestra las condiciones generales de la poliza.
- El sistema muestra las condiciones particulares asociadas a la cotizacion seleccionada.
- La informacion visible incluye coberturas, vigencia y prima cotizada.

### HU1.3.2-Aceptar o rechazar condiciones — [#62](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/62)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** cliente que reviso las condiciones

**Quiero** aceptarlas o rechazarlas

**Para** decidir si continuo con la compra.

**Criterios de Aceptación**

- El cliente puede aceptar o rechazar las condiciones.
- Si rechaza, el proceso no continua hacia pago, firma ni emision.
- Si acepta, el flujo avanza a validacion de identidad.
- El sistema registra fecha, hora, cliente, version de condiciones y decision tomada.

### HU1.3.3-Ejecutar chequeos regulatorios KYC/AML — [#63](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/63)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** Solventa

**Quiero** ejecutar los chequeos regulatorios KYC/AML del cliente

**Para** asegurar que la poliza solo se emita si cumple las validaciones legales.

**Criterios de Aceptación**

- El sistema ejecuta los chequeos KYC y AML antes de permitir la emision.
- El formulario debe incluir un enlace para realizar el proceso ágil de validación de identidad (KYC/AML) que consiste en cargar 2 archivos de fotos del documento de identidad (frontal y reverso).
- El sistema debe cargar estos 2 archivos en el proveedor externo de KYC/AML y mostrar la respuesta de validación de identidad.
- Si los chequeos son aprobados, el flujo puede continuar hacia pago y firma.
- Si algun chequeo falla, no se permite continuar con pago, firma ni emision.
- El resultado de cada chequeo queda registrado para trazabilidad.

### HU1.3.4-Procesar pago de prima antes de emitir — [#64](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/64)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** cliente que acepto la poliza

**Quiero** pagar la prima antes de la emision

**Para** completar la compra del seguro.

**Criterios de Aceptación**

- El sistema presenta el valor de la prima a pagar.
- El cliente puede iniciar el pago de la prima desde el flujo de adquisicion.
- Si el pago es aprobado, el flujo continua hacia firma y emision.
- Si el pago es rechazado, la poliza no se emite.

### HU1.3.5-Firmar digitalmente la poliza — [#65](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/65)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** cliente habilitado para emitir

**Quiero** firmar digitalmente el contrato

**Para** formalizar la compra de la poliza.

**Criterios de Aceptación**

- El sistema solicita la firma digital del contrato.
- La firma queda asociada al cliente, contrato, fecha, hora y proveedor de firma.
- Sin firma digital exitosa, el proceso no puede avanzar a emision.

### HU1.3.6-Emitir y confirmar la poliza — [#66](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/66)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** cliente que ya pago y firmo

**Quiero** que se emita la poliza y reciba la confirmacion

**Para** tener evidencia de mi seguro.

**Criterios de Aceptación**

- La poliza se emite despues de pago aprobado y firma exitosa.
- La poliza queda en estado emitida.
- La confirmacion incluye numero de poliza, vigencia y canal de confirmacion.
- El cliente recibe la confirmacion por el medio registrado.

### HU1.3.7-Registrar trazabilidad de la emision — [#67](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/67)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** auditor de Solventa

**Quiero** consultar el registro de decisiones y eventos de emision

**Para** reconstruir el proceso ante solicitudes de cumplimiento o regulador.

**Criterios de Aceptación**

- El sistema registra los eventos de aceptacion, validacion, chequeos regulatorios, pago, firma y emision.
- Cada evento incluye fecha, hora, usuario o sistema origen y resultado.
- El registro permite reconstruir el flujo completo de emision de una poliza.

### HU1.3.8-Consultar poliza emitida — [#68](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/68)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** cliente con poliza emitida

**Quiero** consultar el documento de mi poliza

**Para** revisar mi cobertura despues de la compra.

**Criterios de Aceptación**

- El cliente puede consultar la poliza emitida desde su sesion.
- La consulta muestra numero de poliza, coberturas, vigencia y estado.
- Solo el cliente propietario puede consultar su poliza emitida.

[Volver al índice](#índice)

---

# E2 — Onboarding de socios y venta asistida (Web)

**Issue de la épica:** [#18](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/18)

## F2.1 — Onboarding de socios y gestión de credenciales

**Issue de la feature:** [#96](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/96)

**Descripción de la feature:** permite registrar, habilitar y administrar socios de distribución para que puedan integrarse con Solventa mediante API, incluyendo la emisión, consulta, rotación y revocación de credenciales de acceso.

### HU2.1.1-Registrar socio de distribucion — [#97](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/97)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** administrador de socios

**Quiero** registrar un nuevo socio de distribucion

**Para** habilitar su proceso de integracion con Solventa.

**Criterios de Aceptación**

- El sistema permite crear un registro basico del socio.
- El registro incluye datos como nombre, tipo de socio y canal de integracion.
- El socio queda en estado pendiente hasta su aprobacion.
- El sistema guarda trazabilidad del registro.

### HU2.1.2-Aprobar o activar socio — [#98](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/98)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** operador de Solventa

**Quiero** aprobar o activar un socio registrado

**Para** permitir que pueda solicitar credenciales y consumir servicios de integracion.

**Criterios de Aceptación**

- El sistema permite cambiar el estado del socio de pendiente a activo o rechazado.
- Solo los socios activos pueden continuar hacia la generacion de credenciales.
- El sistema registra quien realizo la aprobacion y cuando.

### HU2.1.3-Generar credenciales de acceso — [#99](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/99)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** operador de Solventa

**Quiero** generar credenciales de acceso para un socio activo

**Para** que pueda autenticarse en los requests hacia la API de Solventa.

**Criterios de Aceptación**

- El sistema genera al menos un identificador de acceso y un secreto asociados al socio.
- Las credenciales solo se emiten para socios activos.
- El secreto se muestra una sola vez o por un canal seguro definido.
- El sistema guarda trazabilidad de la emision de credenciales.

### HU2.1.4-Consultar credenciales del socio — [#100](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/100)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** operador de Solventa

**Quiero** consultar las credenciales asociadas a un socio

**Para** verificar su estado y administrar su integracion.

**Criterios de Aceptación**

- El sistema permite visualizar el identificador de acceso del socio.
- El sistema muestra el estado de vigencia de las credenciales.
- El secreto no se expone nuevamente si la politica de seguridad no lo permite.
- La consulta queda registrada en trazabilidad.

### HU2.1.5-Rotar credenciales — [#101](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/101)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** operador de Solventa

**Quiero** rotar las credenciales de un socio

**Para** reforzar la seguridad de la integracion cuando sea necesario.

**Criterios de Aceptación**

- El sistema permite generar nuevas credenciales para un socio activo.
- Las credenciales anteriores pueden quedar invalidadas segun la politica definida.
- El socio recibe de forma segura las nuevas credenciales.
- La rotacion queda registrada con fecha, hora y responsable.

### HU2.1.6-Revocar credenciales — [#102](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/102)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** operador de Solventa

**Quiero** revocar las credenciales de un socio

**Para** impedir que siga consumiendo la API cuando el socio sea dado de baja o exista un incidente de seguridad.

**Criterios de Aceptación**

- El sistema permite revocar credenciales activas.
- Tras la revocacion, el socio no puede autenticarse con esas credenciales.
- El sistema registra la causal de revocacion.
- La revocacion queda auditada.

### HU2.1.7-Consultar estado del onboarding — [#103](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/103)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** socio o administrador de Solventa

**Quiero** consultar el estado del onboarding del socio

**Para** saber si ya esta pendiente, aprobado, activo o rechazado.

**Criterios de Aceptación**

- El sistema muestra el estado actual del socio.
- El estado refleja las etapas principales del onboarding.
- La consulta permite identificar si el socio puede o no consumir la API.

[Volver al índice](#índice)

---

## F2.2 — Venta asistida desde canales de terceros

**Issue de la feature:** [#19](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/19)

### HU2.2.1-Autenticar asesor del socio — [#69](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/69)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** asesor de un socio de distribucion

**Quiero** acceder con credenciales del socio

**Para** operar solo sobre la informacion autorizada de mi canal y consumir la API de Solventa.

**Criterios de Aceptación**

- El asesor debe autenticarse antes de iniciar el flujo asistido.
- El sistema identifica el socio al que pertenece el asesor.
- El asesor solo accede a las funcionalidades autorizadas para su socio.
- Las llamadas a la API quedan asociadas al socio autenticado.

### HU2.2.2-Registrar prospecto — [#70](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/70)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** asesor de un socio de distribucion

**Quiero** registrar un prospecto de cliente

**Para** iniciar la venta asistida y continuar el flujo de adquisicion.

**Criterios de Aceptación**

- El asesor autenticado puede registrar un prospecto.
- El registro incluye como minimo nombre, documento, correo o telefono y producto de interes.
- El prospecto queda asociado al socio autenticado que lo registro.
- El prospecto solo es visible para usuarios autorizados de ese socio.
- El registro queda disponible para continuar el proceso asistido.

### HU2.2.3-Registrar consentimiento del prospecto — [#71](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/71)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** asesor de un socio de distribucion

**Quiero** registrar el consentimiento del prospecto

**Para** compartir sus datos con Solventa de forma autorizada.

**Criterios de Aceptación**

- El sistema permite registrar la aceptacion del consentimiento del prospecto.
- El consentimiento queda asociado al prospecto y al socio que lo registro.
- Sin consentimiento registrado, no se permite continuar con la cotizacion asistida.
- El registro del consentimiento incluye fecha, hora, canal y version de terminos.

### HU2.2.4-Realizar cotizacion asistida — [#72](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/72)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** asesor de un socio de distribucion

**Quiero** cotizar un seguro para un prospecto desde mi canal

**Para** presentar la oferta antes de la adquisicion.

**Criterios de Aceptación**

- El sistema permite iniciar una cotizacion para un prospecto registrado.
- La cotizacion se genera desde el canal del socio.
- La cotizacion genera identificador, prima estimada y estado.
- La cotizacion queda asociada al socio autenticado que la solicito.
- Un socio no puede consultar ni modificar cotizaciones de otro socio.

### HU2.2.5-Ver condiciones de la poliza — [#73](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/73)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** asesor de un socio de distribucion

**Quiero** ver las condiciones de la poliza para una cotizacion asistida

**Para** explicarle al prospecto lo que va a contratar.

**Criterios de Aceptación**

- El sistema muestra las condiciones generales de la poliza.
- El sistema muestra las condiciones particulares asociadas a la cotizacion seleccionada.
- La informacion visible incluye coberturas, vigencia y prima cotizada.

### HU2.2.6-Aceptar o rechazar condiciones — [#74](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/74)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** asesor de un socio de distribucion

**Quiero** registrar si el prospecto acepta o rechaza las condiciones

**Para** decidir si el flujo asistido puede continuar.

**Criterios de Aceptación**

- El asesor puede registrar la decision de aceptar o rechazar las condiciones.
- Si rechaza, el proceso no continua hacia pago, firma ni emision.
- Si acepta, el flujo avanza a chequeos regulatorios.
- El sistema registra fecha, hora, socio, version de condiciones y decision tomada.

### HU2.2.7-Ejecutar chequeos regulatorios KYC/AML — [#114](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/114)

**Fecha de origen:** 2026-08-23 | **Estado:** open

**Descripción**

**Como** Solventa

**Quiero** ejecutar los chequeos regulatorios KYC/AML del cliente dentro del flujo asistido

**Para** asegurar que la poliza solo se emita si cumple las validaciones legales.

**Criterios de Aceptación**

- El sistema ejecuta los chequeos KYC antes de permitir la emision.
- El sistema ejecuta los chequeos AML antes de permitir la emision.
- Si los chequeos son aprobados, el flujo puede continuar hacia pago, firma y emision.
- Si algun chequeo falla, no se permite continuar con pago, firma ni emision.
- El resultado de cada chequeo queda registrado para trazabilidad.

### HU2.2.8-Procesar pago de prima antes de emitir — [#115](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/115)

**Fecha de origen:** 2026-08-23 | **Estado:** open

**Descripción**

**Como** asesor de un socio de distribucion

**Quiero** procesar el pago de la prima dentro del flujo asistido

**Para** completar la compra del seguro.

**Criterios de Aceptación**

- El sistema presenta el valor de la prima a pagar.
- El asesor puede iniciar el pago de la prima desde el flujo asistido.
- Si el pago es aprobado, el flujo continua hacia firma y emision.
- Si el pago es rechazado, la poliza no se emite.

### HU2.2.9-Firmar digitalmente la poliza — [#116](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/116)

**Fecha de origen:** 2026-08-23 | **Estado:** open

**Descripción**

**Como** asesor de un socio de distribucion

**Quiero** capturar la firma digital del contrato

**Para** formalizar la compra de la poliza.

**Criterios de Aceptación**

- El sistema solicita la firma digital del contrato dentro del flujo asistido.
- La firma queda asociada al cliente, contrato, fecha, hora y proveedor de firma.
- Sin firma digital exitosa, el proceso no puede avanzar a emision.

### HU2.2.10-Emitir y confirmar la poliza — [#117](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/117)

**Fecha de origen:** 2026-08-23 | **Estado:** open

**Descripción**

**Como** asesor de un socio de distribucion

**Quiero** que se emita la poliza y se confirme la adquisicion

**Para** tener evidencia de que la compra asistida quedo completada.

**Criterios de Aceptación**

- La poliza se emite despues de pago aprobado y firma exitosa.
- La poliza queda en estado emitida.
- La confirmacion incluye numero de poliza, vigencia y canal de confirmacion.
- El cliente recibe la confirmacion por el medio registrado.

### HU2.2.11-Registrar trazabilidad de la venta asistida — [#118](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/118)

**Fecha de origen:** 2026-08-23 | **Estado:** open

**Descripción**

**Como** auditor de Solventa

**Quiero** consultar el registro de decisiones y eventos del flujo asistido

**Para** reconstruir el proceso ante solicitudes de cumplimiento o regulador.

**Criterios de Aceptación**

- El sistema registra los eventos de aceptacion, validacion, chequeos regulatorios, pago, firma y emision.
- Cada evento incluye fecha, hora, usuario o sistema origen y resultado.
- El registro permite reconstruir el flujo completo de adquisicion asistida de una poliza.

### HU2.2.12-Consultar poliza emitida — [#119](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/119)

**Fecha de origen:** 2026-08-23 | **Estado:** open

**Descripción**

**Como** asesor de un socio de distribucion

**Quiero** consultar la poliza emitida

**Para** verificar la cobertura y la evidencia de la venta asistida.

**Criterios de Aceptación**

- El asesor puede consultar la poliza emitida desde el flujo asistido.
- La consulta muestra numero de poliza, coberturas, vigencia y estado.
- Solo usuarios autorizados del socio pueden consultar la poliza emitida.

[Volver al índice](#índice)

---

# E3 — Acceso seguro y autogestión en movilidad (Mobile)

**Issue de la épica:** [#20](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/20)

## F3.1 — Activación y acceso biométrico en app móvil

**Issue de la feature:** [#21](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/21)

### HU3.1.1-Activación mediante selfie con prueba de vida — [#87](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/87)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** Cliente Asegurado que ya creó su cuenta en el canal web

**Quiero** activar el acceso móvil a mi cuenta mediante una selfie con prueba de vida

**Para** verificar mi identidad y usar la app de forma rápida y segura desde mi dispositivo.

**Precondición**

El cliente ya completó el registro inicial en el canal web (F1.1 - Registro inicial del cliente con datos básicos + check de consentimiento, #15). La app móvil no crea cuentas.

**Criterios de Aceptación**

- Si el usuario abre la app sin una cuenta previa, la app muestra un mensaje claro indicando que debe registrarse primero en el canal web, con el enlace correspondiente.
- La app debe solicitar al usuario tomar una selfie usando la cámara frontal del dispositivo como parte del flujo de activación.
- El sistema debe ejecutar una prueba de vida (liveness detection) que solicite un gesto simple (parpadeo, giro de cabeza) para descartar fotos estáticas o suplantación.
- La selfie y el resultado de la prueba de vida deben enviarse al proveedor de verificación biométrica (KYC) mediante una llamada segura.
- Si la verificación es exitosa, el dispositivo queda vinculado a la cuenta y se habilita el acceso a la app; si falla, debe mostrar un mensaje claro con opción de reintentar (máximo 3 intentos).
- El resultado de la verificación (aprobado/rechazado), el identificador del dispositivo vinculado y su timestamp deben quedar registrados para trazabilidad y auditoría.
- La selfie no se almacena en el dispositivo una vez enviada al proveedor KYC.

### HU3.1.2-Configurar autenticación biométrica para acceso a la app — [#88](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/88)

**Fecha de origen:** 2026-08-22 | **Estado:** open | **Asesgando a:** seangego

**Descripción**

**Como** Cliente Asegurado

**Quiero** configurar el acceso a la app mediante mi huella dactilar o reconocimiento facial

**Para** ingresar de forma rápida y segura sin escribir mi contraseña cada vez que abro la app.

**Criterios de Aceptación**

- Tras verificar la identidad y vincular el dispositivo, la app debe ofrecer activar el acceso biométrico (huella o rostro), usando las APIs nativas de biometría del sistema operativo.
- El usuario debe poder aceptar o rechazar esta configuración; si la rechaza, debe poder acceder con la contraseña de su cuenta.
- Si el dispositivo no cuenta con hardware biométrico o el usuario no lo tiene configurado en el sistema operativo, la app debe detectarlo, informarlo con un mensaje claro y ofrecer directamente la contraseña.
- La app no almacena ni envía datos biométricos. La verificación la realiza el sistema operativo y la app solo guarda la preferencia de activación.
- En inicios de sesión posteriores, y al volver a la app tras más de 60 segundos en segundo plano, si la biometría está activada, la app debe solicitar la validación biométrica antes de conceder acceso a la información de la cuenta.
- Si el usuario cancela el aviso del sistema, la app ofrece la contraseña y no cuenta la cancelación como intento fallido.
- Tras 3 intentos fallidos consecutivos, la app bloquea el acceso biométrico durante 5 minutos y solicita la contraseña. El contador se reinicia tras un acceso exitoso y el bloqueo se mantiene aunque se cierre la app.
- El usuario puede activar o desactivar el acceso biométrico en cualquier momento desde Perfil > Seguridad.
- Si la biometría registrada en el sistema operativo cambia (se agrega o elimina una huella o rostro), la app solicita la contraseña y vuelve a ofrecer la activación.

### HU3.1.3-Otorgar consentimiento para el uso de datos biométricos — [#89](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/89)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** Cliente Asegurado

**Quiero** que se me informe claramente y otorgar mi consentimiento antes de que la app use mis datos biométricos

**Para** tener control sobre el uso de mi información personal sensible.

**Criterios de Aceptación**

- Antes de capturar la selfie o registrar datos biométricos, la app debe presentar una pantalla con un mensaje claro sobre qué datos biométricos se capturarán y con qué finalidad se usarán.
- El usuario debe aceptar explícitamente (checkbox o botón de aceptación) antes de continuar; el sistema no debe proceder con la captura biométrica sin este consentimiento.
- El consentimiento otorgado (o rechazado), junto con fecha, hora y versión del texto legal aceptado, debe quedar almacenado de forma auditable.
- Si el usuario no otorga el consentimiento, el flujo de onboarding biométrico debe detenerse e informar que no puede continuar con el registro móvil por esa vía.

[Volver al índice](#índice)

---

## F3.2 — Billetera de pólizas móvil sin conexión

**Issue de la feature:** [#22](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/22)

### HU3.2.1-Consultar coberturas y certificado digital de la póliza sin conexión — [#90](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/90)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** Cliente Asegurado

**Quiero** consultar mis coberturas contratadas y el carné/certificado digital de la póliza (credencial) de mis pólizas vigentes aunque no tenga conexión a internet

**Para** tener acceso a esa información en cualquier momento, incluso en zonas sin señal.

**Criterios de Aceptación**

- La app debe almacenar de forma local y cifrada en el dispositivo una copia de las pólizas vigentes del usuario (coberturas, número de póliza, vigencia, credencial digital) tras cada sincronización exitosa con el backend.
- Cuando el dispositivo no tenga conexión, la app debe permitir abrir la sección "Mis pólizas" y visualizar la información almacenada localmente sin mostrar errores de red.
- La app debe indicar visiblemente cuándo la información mostrada proviene del almacenamiento local (modo offline) y la fecha/hora de la última sincronización exitosa.
- Los datos almacenados localmente deben estar cifrados en reposo en el dispositivo, cumpliendo los lineamientos de protección de datos sensibles del proyecto.

### HU3.2.2-Sincronizar la billetera de pólizas al restablecer la conexión — [#91](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/91)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** Cliente Asegurado

**Quiero** que la información de mi billetera de pólizas se actualice automáticamente cuando mi dispositivo recupere la conexión a internet

**Para** asegurarme de estar viendo siempre la información más reciente de mis pólizas.

**Criterios de Aceptación**

- Al detectar que el dispositivo recupera conexión, la app debe iniciar automáticamente la sincronización con el backend para actualizar la información de pólizas y credenciales almacenadas localmente.
- Si existen cambios entre la información local y la del servidor (póliza modificada, cancelada o renovada), la app debe reemplazar los datos locales por la versión más reciente del servidor.
- Mientras la sincronización esté en curso, la app debe mostrar un indicador de estado ("sincronizando...") sin bloquear la consulta de la información ya almacenada localmente.
- Si la sincronización falla, la app debe reintentarla más adelante sin perder ni corromper los datos locales, y debe seguir mostrando la última versión sincronizada exitosamente.

[Volver al índice](#índice)

---

# E4 — Siniestros y respuesta inmediata (Mobile)

**Issue de la épica:** [#23](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/23)

## F4.1 — Gestión y reporte de siniestros

**Issue de la feature:** [#24](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/24)

### HU4.1.1 — Registrar un siniestro — [#81](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/81)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** Cliente Asegurado

**Quiero** reportar un siniestro desde la aplicación móvil indicando la póliza afectada y la información básica del evento

**Para** iniciar el proceso de atención y evaluación del siniestro.

**Criterios de aceptación**

- El cliente debe poder seleccionar una póliza asociada a su cuenta.
- El cliente debe poder registrar la información básica del evento.
- El sistema debe permitir confirmar el envío del reporte.
- El sistema debe generar un identificador para el siniestro creado.
- El cliente debe recibir confirmación de que el siniestro fue registrado correctamente.

### HU4.1.2 — Adjuntar evidencia multimedia y geolocalización — [#82](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/82)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** Cliente Asegurado

**Quiero** adjuntar fotografías, videos y ubicación al reporte de un siniestro

**Para** aportar evidencia que facilite la evaluación del evento reportado.

**Criterios de aceptación**

- El cliente debe poder adjuntar fotografías desde la cámara o almacenamiento del dispositivo.
- El cliente debe poder adjuntar videos cuando el tipo de evidencia lo permita.
- La aplicación debe solicitar los permisos necesarios para acceder a cámara y ubicación.
- El cliente debe poder asociar la geolocalización al reporte del siniestro.
- Las evidencias deben quedar asociadas al siniestro correspondiente.
- Si una evidencia no puede ser enviada, el sistema debe informar al usuario sin perder el resto del reporte.

### HU4.1.3 — Solicitar asistencia en sitio — [#83](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/83)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** Cliente Asegurado

**Quiero** solicitar asistencia en sitio desde un siniestro reportado

**Para** recibir apoyo cuando el evento requiera atención presencial.

**Criterios de aceptación**

- El cliente debe poder solicitar asistencia desde un siniestro previamente registrado.
- El sistema debe registrar la solicitud de asistencia asociada al siniestro.
- El cliente debe recibir confirmación de que la solicitud fue recibida.
- Si el servicio externo de asistencia no está disponible, el sistema debe informar al cliente.
- El estado de la solicitud de asistencia debe poder ser consultado posteriormente.

[Volver al índice](#índice)

---

## F4.2 — Siniestros paramétricos y notificaciones

**Issue de la feature:** [#25](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/25)

### HU4.2.1 — Consultar el estado de un siniestro — [#84](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/84)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** Cliente Asegurado

**Quiero** consultar desde la aplicación móvil el estado de mis siniestros

**Para** conocer el avance de su atención sin tener que contactar manualmente a Solventa.

**Criterios de aceptación**

- El cliente debe poder visualizar los siniestros asociados a su cuenta.
- El cliente debe poder consultar el detalle de un siniestro.

### HU4.2.2 — Recibir notificaciones push sobre el siniestro — [#85](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/85)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** Cliente Asegurado

**Quiero** recibir notificaciones push cuando ocurra un cambio relevante en mi siniestro

**Para** conocer oportunamente su avance sin tener que consultar constantemente la aplicación.

**Criterios de aceptación**

- El cliente debe poder recibir notificaciones relacionadas con sus siniestros.
- Una notificación debe identificar el siniestro al que corresponde.
- El sistema debe evitar enviar notificaciones asociadas a siniestros de otros clientes.
- La aplicación debe manejar adecuadamente el caso en el que el usuario no haya autorizado notificaciones.
- Al seleccionar una notificación, la aplicación debe permitir navegar al detalle correspondiente cuando aplique.

### HU4.2.3 — Procesar automáticamente un siniestro paramétrico — [#86](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/86)

**Fecha de origen:** 2026-08-22 | **Estado:** open

**Descripción**

**Como** Cliente Asegurado con una póliza paramétrica activa

**Quiero** que, cuando se confirme un evento cubierto por mi póliza, Solventa procese automáticamente el siniestro y la indemnización correspondiente

**Para** recibir el beneficio contratado sin tener que iniciar manualmente una reclamación.

**Criterios de aceptación**

- El sistema debe recibir o identificar el evento externo asociado a una póliza paramétrica.
- El sistema debe validar que el evento se encuentre cubierto por una póliza vigente.
- El sistema debe crear el siniestro correspondiente sin requerir un reporte manual del cliente.
- El sistema debe calcular o determinar la indemnización aplicable según las reglas vigentes.
- El sistema debe iniciar el proceso de pago correspondiente.
- El cliente debe ser notificado sobre la generación y evolución del siniestro paramétrico.
- El procesamiento debe quedar registrado para fines de auditoría y trazabilidad.

[Volver al índice](#índice)

---

# E5 — Gestión del ciclo de vida póliza (Web)

**Issue de la épica:** [#104](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/104)

## F5.1 — Gestión del ciclo de vida de pólizas

**Issue de la feature:** [#105](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/105)

### HU5.1.1-Renovar la poliza — [#106](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/106)

**Fecha de origen:** 2026-08-23 | **Estado:** open

**Descripción**

**Como** cliente con una poliza vigente

**Quiero** renovar mi poliza antes de su vencimiento

**Para** mantener la cobertura activa sin interrupciones.

**Criterios de Aceptación**

- El sistema permite iniciar la renovacion solo si la poliza esta vigente o dentro de la ventana de renovacion.
- El sistema valida las condiciones de renovacion antes de confirmar el cambio.
- Si la renovacion es aprobada, la nueva vigencia queda registrada.
- El sistema notifica al cliente el resultado de la renovacion.

### HU5.1.2-Modificar la poliza — [#107](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/107)

**Fecha de origen:** 2026-08-23 | **Estado:** open

**Descripción**

**Como** cliente o analista autorizado

**Quiero** modificar los datos o condiciones de una poliza

**Para** mantener el contrato alineado con la situacion actual del asegurado.

**Criterios de Aceptación**

- El sistema permite modificar solo campos autorizados por la regla de negocio.
- Cada modificacion queda asociada a la poliza y al usuario que la realizo.
- El sistema valida que la poliza permita modificaciones segun su estado.
- El sistema conserva el historial de cambios realizados.

### HU5.1.3-Cancelar la poliza — [#108](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/108)

**Fecha de origen:** 2026-08-23 | **Estado:** open

**Descripción**

**Como** cliente o analista autorizado

**Quiero** cancelar una poliza activa

**Para** terminar la cobertura cuando ya no la necesito o cuando aplique una causal de cancelacion.

**Criterios de Aceptación**

- El sistema permite cancelar solo polizas que esten en estado cancelable.
- El sistema registra la causal de cancelacion.
- La poliza queda en estado cancelada una vez aplicada la operacion.
- El sistema notifica la cancelacion al cliente y deja trazabilidad del evento.

### HU5.1.4-Consultar historial de cambios de la poliza — [#109](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/109)

**Fecha de origen:** 2026-08-23 | **Estado:** open

**Descripción**

**Como** cliente o auditor autorizado

**Quiero** consultar el historial de cambios de una poliza

**Para** revisar renovaciones, modificaciones, cancelaciones y eventos relevantes.

**Criterios de Aceptación**

- El sistema muestra los eventos principales del ciclo de vida de la poliza.
- Cada evento incluye fecha, hora, usuario o sistema origen y resultado.
- La consulta permite identificar el estado actual y los cambios previos.

### HU5.1.5-Generar reporte regulatorio del ciclo de vida — [#110](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/110)

**Fecha de origen:** 2026-08-23 | **Estado:** open

**Descripción**

**Como** operador de cumplimiento o gestion de polizas

**Quiero** generar reportes regulatorios del ciclo de vida de las polizas

**Para** atender requerimientos de supervisión y control.

**Criterios de Aceptación**

- El sistema consolida la informacion necesaria para el reporte.
- El reporte incluye renovaciones, modificaciones, cancelaciones y estados relevantes.
- El sistema permite identificar el periodo cubierto por el reporte.
- El sistema deja evidencia de la generacion del reporte.

### HU5.1.6-Generar reporte para reaseguradoras — [#111](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/111)

**Fecha de origen:** 2026-08-23 | **Estado:** open

**Descripción**

**Como** operador de gestion de polizas

**Quiero** generar reportes para reaseguradoras con el estado de las polizas

**Para** mantener actualizada la informacion compartida con los esquemas de reaseguro.

**Criterios de Aceptación**

- El sistema consolida la informacion relevante para reaseguradoras.
- El reporte incluye altas, renovaciones, modificaciones y cancelaciones segun aplique.
- El sistema permite generar el reporte para un periodo definido.
- El sistema deja trazabilidad de la generacion y envio del reporte.

### HU5.1.7-Registrar trazabilidad del ciclo de vida — [#112](https://github.com/dzamoranouniandes/misw4501-grupo3-solventa-backend/issues/112)

**Fecha de origen:** 2026-08-23 | **Estado:** open

**Descripción**

**Como** auditor de Solventa

**Quiero** consultar la trazabilidad completa de las operaciones sobre una poliza

**Para** reconstruir decisiones y eventos ante auditorias o reclamos.

**Criterios de Aceptación**

- El sistema registra quien realizo cada operacion y cuando ocurrio.
- El sistema registra el tipo de evento, el resultado y la poliza afectada.
- La trazabilidad permite reconstruir el ciclo de vida de la poliza de extremo a extremo.

[Volver al índice](#índice)

---

## Resumen de cuenta

| Épica | Feature | # HU | Rango de issues |
|---|---|---|---|
| E1 | F1.1 | 5 | 53, 113, 54, 55, 56 |
| E1 | F1.2 | 5 | 95, 58, 57, 59, 60 |
| E1 | F1.3 | 8 | 61–68 |
| E2 | F2.1 | 7 | 97–103 |
| E2 | F2.2 | 12 | 69–74, 114–119 |
| E3 | F3.1 | 3 | 87, 88, 89 |
| E3 | F3.2 | 2 | 90, 91 |
| E4 | F4.1 | 3 | 81, 82, 83 |
| E4 | F4.2 | 3 | 84, 85, 86 |
| E5 | F5.1 | 7 | 106–112 |
| **Total** | **10 features** | **55 HU** | — |