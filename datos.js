/* Solventa · fuente única de datos de ejemplo
 * Todas las pantallas (móvil y web) leen de aquí. No inventar clientes,
 * pólizas ni montos nuevos en las pantallas: agregarlos a este archivo.
 *
 * Unificado según la sección 4 del brief: titular Camila Rojas Peña,
 * póliza de viaje #SLV-2026-08341 vigente del 12 mar 2026 al 12 mar 2027,
 * prima $52.000, cobertura máxima $60.000.000, hoy = 20 sep 2026.
 */
window.SOLVENTA_DATOS = {
  hoy: '20 sep 2026',
  hoyCorto: '20/09/2026',
  horaSync: '20 sep 2026, 9:41 am',

  cliente: {
    nombre: 'Camila Rojas Peña',
    saludo: 'camila',
    documento: 'CC 1.018.442.117',
    correo: 'camila.rojas@correo.com',
    celular: '+57 310 442 1177',
    cuentaPago: 'Terminada en 4471',
    clienteDesde: '12 mar 2026',
    fechaNacimiento: '04/07/1994',
    genero: 'Femenino',
    ciudad: 'Bogotá, Colombia',
  },

  /* Estados posibles y qué acción permite cada uno (tabla de la sección 1) */
  reglasEstado: {
    'Vigente': { renovar: 'ventana', modificar: true, cancelar: true, tono: 'active' },
    'Por renovar': { renovar: true, modificar: true, cancelar: true, tono: 'review' },
    'En revisión': { renovar: false, modificar: false, cancelar: true, tono: 'review' },
    'Vencida': { renovar: false, modificar: false, cancelar: false, tono: 'neutral' },
    'Cancelada': { renovar: false, modificar: false, cancelar: false, tono: 'rejected' },
  },

  polizas: [
    {
      id: '#SLV-2026-08341', ramo: 'Seguro de viaje', prima: '$52.000 COP',
      estado: 'Vigente', tono: 'active',
      desde: '12 mar 2026', hasta: '12 mar 2027', vigencia: 'Vigente hasta el 12 mar 2027',
      deducible: '$0', maxima: '$60.000.000 COP',
      cobertura: 'Retraso de vuelo, equipaje y gastos médicos en viaje',
      parametrico: true, enVentana: false,
      motivoRenovar: 'Solo se puede renovar 30 días antes del vencimiento.',
    },
    {
      id: '#SLV-2026-08340', ramo: 'Seguro de hogar', prima: '$118.400 COP',
      estado: 'Por renovar', tono: 'review',
      desde: '12 oct 2025', hasta: '12 oct 2026', vigencia: 'Vence el 12 oct 2026',
      deducible: '$500.000', maxima: '$180.000.000 COP',
      cobertura: 'Incendio, daño por agua y contenidos',
      parametrico: false, enVentana: true,
    },
    {
      id: '#SLV-2026-08338', ramo: 'Seguro de dispositivos', prima: '$28.900 COP',
      estado: 'En revisión', tono: 'review',
      desde: '20 may 2026', hasta: '20 may 2027', vigencia: 'En revisión por el siniestro abierto',
      deducible: '$180.000', maxima: '$4.500.000 COP',
      cobertura: 'Pantalla, daño accidental y hurto calificado',
      parametrico: false, enVentana: false,
      motivoModificar: 'No se puede modificar mientras haya un siniestro abierto.',
    },
    {
      id: '#SLV-2026-08337', ramo: 'Seguro de auto', prima: '$214.000 COP',
      estado: 'Cancelada', tono: 'rejected',
      desde: '3 ene 2026', hasta: '15 sep 2026', vigencia: 'Cancelada el 15 sep 2026',
      deducible: '$1.200.000', maxima: '$85.000.000 COP',
      cobertura: 'Responsabilidad civil, pérdida parcial y total',
      parametrico: false, enVentana: false,
      causal: 'Solicitud del cliente', efecto: '15 sep 2026',
      motivoBloqueo: 'Esta póliza fue cancelada el 15 sep 2026 por solicitud del cliente.',
    },
    {
      id: '#SLV-2025-07120', ramo: 'Seguro de viaje', prima: '$44.700 COP',
      estado: 'Vencida', tono: 'neutral',
      desde: '30 jun 2025', hasta: '30 jun 2026', vigencia: 'Venció el 30 jun 2026',
      deducible: '$0', maxima: '$40.000.000 COP',
      cobertura: 'Gastos médicos en viaje y equipaje',
      parametrico: false, enVentana: false,
      motivoBloqueo: 'Esta póliza venció el 30 jun 2026. No admite cambios.',
    },
  ],

  /* Validaciones que debe cumplir una póliza para renovarse (HU5.1.1) */
  validacionesRenovar: [
    { regla: 'La póliza está vigente o por renovar', cumple: true },
    { regla: 'No tiene siniestros abiertos', cumple: true },
    { regla: 'Los pagos están al día', cumple: true },
  ],
  validacionesRenovarFallo: [
    { regla: 'La póliza está vigente o por renovar', cumple: true },
    { regla: 'No tiene siniestros abiertos', cumple: false, detalle: 'Siniestro #SIN-2026-2210 en evaluación' },
    { regla: 'Los pagos están al día', cumple: true },
  ],

  /* Historial por póliza (HU5.1.4) */
  historial: [
    { fecha: '20 sep 2026 09:41', origen: 'Sistema', tipo: 'Notificación enviada', resultado: 'Exitoso', detalle: 'Aviso de pago paramétrico al titular' },
    { fecha: '12 sep 2026 15:20', origen: 'Mariana Ocampo', tipo: 'Modificación', resultado: 'Exitoso', detalle: 'Cobertura de equipaje: $6.000.000 → $9.000.000' },
    { fecha: '1 ago 2026 11:02', origen: 'Camila Rojas Peña', tipo: 'Cambio de estado', resultado: 'Exitoso', detalle: 'Consentimiento actualizado a la política v2.1' },
    { fecha: '14 jul 2026 08:47', origen: 'Mariana Ocampo', tipo: 'Modificación', resultado: 'Fallido', detalle: 'Cambio de prima rechazado: campo no modificable' },
    { fecha: '12 mar 2026 10:05', origen: 'Sistema', tipo: 'Emisión', resultado: 'Exitoso', detalle: 'Póliza emitida tras pago con tarjeta terminada en 4471' },
  ],

  /* Cartera de siniestros — la ve el operador completa, el cliente solo los suyos */
  siniestros: [
    {
      id: '#SIN-2026-2210', poliza: '#SLV-2026-08338', ramo: 'Dispositivos', titular: 'Camila Rojas Peña',
      reportado: '20 sep 2026', tipo: 'Daño al dispositivo', estimado: '$1.240.000', pagado: '—',
      estado: 'En evaluación', tono: 'review', canal: 'App', dias: '1 de 5', propio: true,
      evidencia: '1 foto · Bogotá, Colombia', asistencia: 'Centro autorizado Chapinero',
    },
    {
      id: '#SIN-2026-2209', poliza: '#SLV-2026-08341', ramo: 'Viaje', titular: 'Camila Rojas Peña',
      reportado: '20 sep 2026', tipo: 'Retraso de vuelo', estimado: '$180.000', pagado: '$180.000',
      estado: 'Pagado', tono: 'active', canal: 'Automático', dias: '0 de 5', propio: true,
      evidencia: 'Reporte de la aerolínea · AV204', asistencia: 'No aplica',
    },
    {
      id: '#SIN-2026-2204', poliza: '#SLV-2026-07711', ramo: 'Hogar', titular: 'Julián Mesa Ortiz',
      reportado: '17 sep 2026', tipo: 'Daño por agua', estimado: '$4.800.000', pagado: '—',
      estado: 'En evaluación', tono: 'review', canal: 'Web', dias: '4 de 5',
      evidencia: '6 fotos · Medellín, Colombia', asistencia: 'Plomería 24h',
    },
    {
      id: '#SIN-2026-2198', poliza: '#SLV-2026-06520', ramo: 'Dispositivos', titular: 'Laura Betancur Gil',
      reportado: '12 sep 2026', tipo: 'Robo', estimado: '$2.100.000', pagado: '$2.100.000',
      estado: 'Pagado', tono: 'active', canal: 'App', dias: '3 de 5',
      evidencia: 'Denuncia + 2 fotos · Cali, Colombia', asistencia: 'No solicitada',
    },
    {
      id: '#SIN-2026-2187', poliza: '#SLV-2026-05903', ramo: 'Viaje', titular: 'Andrés Quintero Sáenz',
      reportado: '8 sep 2026', tipo: 'Gasto médico', estimado: '$960.000', pagado: '—',
      estado: 'Rechazado', tono: 'rejected', canal: 'Web', dias: '5 de 5',
      evidencia: 'Factura ilegible', asistencia: 'No aplica',
    },
  ],

  operador: {
    analista: 'Mariana Ocampo',
    indicadores: [
      { label: 'pólizas activas', value: '12.408', meta: '+214 este mes' },
      { label: 'siniestros abiertos', value: '37', meta: '9 cerca del SLA', tone: 'alert' },
      { label: 'siniestralidad', value: '48,2%', meta: 'objetivo 52%', tone: 'success' },
      { label: 'tiempo medio de resolución', value: '2,4 días', meta: 'paramétricos en minutos' },
    ],
    auditoria: [
      { fecha: '20 sep 2026 09:41', usuario: 'Sistema', poliza: '#SLV-2026-08341', tipo: 'Evento de póliza', detalle: 'Pago paramétrico de $180.000 por retraso de AV204', resultado: 'Exitoso' },
      { fecha: '20 sep 2026 10:14', usuario: 'Camila Rojas Peña', poliza: '#SLV-2026-08338', tipo: 'Evento de póliza', detalle: 'Siniestro #SIN-2026-2210 reportado desde la app', resultado: 'Exitoso' },
      { fecha: '19 sep 2026 16:02', usuario: 'Julián Mesa Ortiz', poliza: '—', tipo: 'Cotización', detalle: 'Cotización de hogar por $118.400, no convertida', resultado: 'Exitoso' },
      { fecha: '18 sep 2026 11:27', usuario: 'Laura Betancur Gil', poliza: '#SLV-2026-06520', tipo: 'Consentimiento', detalle: 'Revocó la finalidad comercial desde la app', resultado: 'Exitoso' },
      { fecha: '17 sep 2026 08:55', usuario: 'Mariana Ocampo', poliza: '#SLV-2026-07711', tipo: 'Evento de póliza', detalle: 'Renovación manual, vigencia hasta 17 sep 2027', resultado: 'Exitoso' },
      { fecha: '15 sep 2026 14:39', usuario: 'Mariana Ocampo', poliza: '#SLV-2026-08337', tipo: 'Evento de póliza', detalle: 'Cancelación por solicitud del cliente', resultado: 'Exitoso' },
      { fecha: '14 sep 2026 09:03', usuario: 'Camila Rojas Peña', poliza: '#SLV-2026-08341', tipo: 'Cotización', detalle: 'Cotización de viaje por $52.000, convertida en póliza', resultado: 'Exitoso' },
      { fecha: '13 sep 2026 17:41', usuario: 'Mariana Ocampo', poliza: '#SLV-2025-07120', tipo: 'Evento de póliza', detalle: 'Intento de renovación sobre póliza vencida', resultado: 'Fallido' },
    ],
    reportesGenerados: [
      { usuario: 'Mariana Ocampo', periodo: '1 – 31 ago 2026', generado: '1 sep 2026 08:12', registros: '1.842' },
      { usuario: 'Mariana Ocampo', periodo: '1 – 31 jul 2026', generado: '1 ago 2026 08:09', registros: '1.766' },
      { usuario: 'Carlos Duque', periodo: '1 – 30 jun 2026', generado: '1 jul 2026 09:30', registros: '1.689' },
    ],
    reaseguradoras: ['Munich Re', 'Swiss Re', 'Mapfre Re'],
    reportesReaseguro: [
      { usuario: 'Mariana Ocampo', reaseguradora: 'Munich Re', periodo: '1 – 31 ago 2026', generado: '2 sep 2026 10:20', estado: 'Enviado' },
      { usuario: 'Carlos Duque', reaseguradora: 'Swiss Re', periodo: '1 – 31 ago 2026', generado: '2 sep 2026 10:44', estado: 'Generado' },
    ],
    resumenReaseguro: [
      { label: 'altas', value: '214' },
      { label: 'renovaciones', value: 'término 1.318' },
      { label: 'modificaciones', value: '96' },
      { label: 'cancelaciones', value: '41' },
    ],
  },

  politica: {
    version: 'v2.1',
    vigenteDesde: '1 ago 2026',
    aceptadaEl: '12 mar 2026',
    retencion: '5 años después de terminar la relación comercial',
    proteccion: 'Se guardan cifrados en Colombia y solo los ve quien atiende tu caso.',
    finalidades: [
      { titulo: 'Emitir y administrar tus pólizas', detalle: 'Datos de identificación y contacto. Sin esto no podemos emitir.', obligatoria: true },
      { titulo: 'Evaluar y pagar siniestros', detalle: 'Evidencia, ubicación del evento y datos bancarios.', obligatoria: true },
      { titulo: 'Calcular tu prima', detalle: 'Datos del riesgo que declaras al cotizar.', obligatoria: true },
      { titulo: 'Ofertas y comunicaciones comerciales', detalle: 'Puedes revocarla cuando quieras sin afectar tus pólizas.', obligatoria: false },
    ],
  },

  /* Journey asistido — el cliente reporta */
  siniestroAsistido: {
    id: '#SIN-2026-2210',
    poliza: '#SLV-2026-08338',
    tipos: ['Daño al dispositivo', 'Robo', 'Gasto médico'],
    tipoPorDefecto: 'Daño al dispositivo',
    relato: 'Se me cayó el celular y se rompió la pantalla',
    fecha: '20/09/2026',
    evidencia: '1 foto · Bogotá, Colombia',
    archivo: 'IMG_0431.jpg',
    prestador: {
      nombre: 'Centro autorizado Chapinero',
      distancia: '1,2 km · llega en 25 min',
      espera: '25 minutos',
    },
  },

  /* Journey paramétrico — Solventa resuelve solo */
  siniestroParametrico: {
    poliza: '#SLV-2026-08341',
    vuelo: 'AV204',
    retraso: '3h 40m',
    umbral: '3 horas',
    monto: '$180.000 COP',
    hora: '9:41',
    fechaLarga: 'domingo 20 sep',
  },

  /* Onboarding móvil */
  onboarding: {
    folio: '#SLV-2026-08341',
    fechaVinculacion: '20 sep 2026, 9:38 am',
    dispositivo: 'iPhone 14 · iOS 18.2',
    maxIntentos: 3,
    bloqueoSegundos: 300,
  },
};
