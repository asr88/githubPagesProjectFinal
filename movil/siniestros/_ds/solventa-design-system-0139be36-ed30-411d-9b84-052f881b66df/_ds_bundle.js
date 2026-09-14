/* @ds-bundle: {"format":4,"namespace":"SolventaDesignSystem_0139be","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"PolicyCard","sourcePath":"components/core/PolicyCard.jsx"},{"name":"StatBlock","sourcePath":"components/core/StatBlock.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"KeyValue","sourcePath":"components/data/KeyValue.jsx"},{"name":"Timeline","sourcePath":"components/data/Timeline.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"ProgressSteps","sourcePath":"components/feedback/ProgressSteps.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"SideNav","sourcePath":"components/navigation/SideNav.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"b1172e907c48","components/core/Button.jsx":"526b5f119084","components/core/Card.jsx":"c9fbaa3d6e52","components/core/IconButton.jsx":"1257d9d348b2","components/core/PolicyCard.jsx":"4c0d747b1e7d","components/core/StatBlock.jsx":"97bc56368360","components/core/Tag.jsx":"f17c43a11454","components/data/DataTable.jsx":"016dc41713b8","components/data/KeyValue.jsx":"3a7e7fccfb5b","components/data/Timeline.jsx":"e6965149cf54","components/feedback/Callout.jsx":"8a336ca6d397","components/feedback/Dialog.jsx":"d24545f85646","components/feedback/ProgressSteps.jsx":"1f40dc3ee384","components/feedback/Toast.jsx":"256e3bd39f69","components/forms/Checkbox.jsx":"bf2db720f3b9","components/forms/Field.jsx":"f2d964b11825","components/forms/Input.jsx":"4419593f57d3","components/forms/RadioGroup.jsx":"71381a541b43","components/forms/Select.jsx":"972e6ac4642b","components/forms/Switch.jsx":"653bda280740","components/navigation/SideNav.jsx":"44fed3c5e06a","components/navigation/TabBar.jsx":"c52263ff5b5e","components/navigation/Tabs.jsx":"a235a5a0ec00","components/navigation/TopBar.jsx":"c5c051c8d857","ui_kits/mobile/App.jsx":"936b5c96cbed","ui_kits/mobile/ClaimFlow.jsx":"cb109d4dc559","ui_kits/mobile/PolicyDetail.jsx":"939652c3935f","ui_kits/mobile/Wallet.jsx":"8edcfb2cd02a","ui_kits/web/ClaimDetail.jsx":"18f69cee1011","ui_kits/web/Console.jsx":"04b432a732d9","ui_kits/web/Overview.jsx":"713928f2aa9e","ui_kits/web/Policies.jsx":"ce2c7b0d58d2","ui_kits/web/data.jsx":"a6e0d1bf8cd3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SolventaDesignSystem_0139be = window.SolventaDesignSystem_0139be || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  active: {
    bg: 'var(--status-active-bg)',
    ink: 'var(--status-active-ink)',
    dot: 'var(--status-active-dot)'
  },
  auto: {
    bg: 'var(--status-auto-bg)',
    ink: 'var(--status-auto-ink)',
    dot: 'var(--status-auto-dot)'
  },
  review: {
    bg: 'var(--status-review-bg)',
    ink: 'var(--status-review-ink)',
    dot: 'var(--status-review-dot)'
  },
  rejected: {
    bg: 'var(--status-rejected-bg)',
    ink: 'var(--status-rejected-ink)',
    dot: 'var(--status-rejected-dot)'
  },
  neutral: {
    bg: 'var(--surface-sunken)',
    ink: 'var(--ink-62)',
    dot: 'var(--ink-28)'
  }
};
function Badge({
  tone = 'neutral',
  dot = true,
  children,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-caption)',
      fontWeight: 'var(--weight-semibold)',
      padding: '5px 10px',
      background: t.bg,
      color: t.ink,
      borderRadius: 'var(--radius-none)',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 'var(--radius-dot)',
      background: t.dot,
      flex: '0 0 auto'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: '8px 14px',
    fontSize: '13px'
  },
  md: {
    padding: '11px 20px',
    fontSize: 'var(--size-ui)'
  },
  lg: {
    padding: '14px 24px',
    fontSize: '16px'
  }
};
const variants = {
  primary: {
    background: 'var(--action-primary)',
    color: 'var(--action-primary-text)',
    borderColor: 'transparent'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-body)',
    borderColor: 'var(--action-secondary-border)'
  },
  accent: {
    background: 'var(--action-accent)',
    color: 'var(--action-accent-text)',
    borderColor: 'transparent'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-primary)',
    borderColor: 'transparent'
  },
  danger: {
    background: 'var(--slv-coral)',
    color: '#fff',
    borderColor: 'transparent'
  }
};
const hovers = {
  primary: 'var(--action-primary-hover)',
  secondary: 'var(--action-secondary-hover-bg)',
  accent: 'var(--action-accent-hover)',
  ghost: 'var(--action-secondary-hover-bg)',
  danger: '#D64F3E'
};
function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  disabled = false,
  icon = null,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      borderStyle: 'solid',
      borderWidth: 'var(--border-width)',
      borderRadius: 'var(--radius-none)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      width: full ? '100%' : 'auto',
      transition: 'var(--transition-control)',
      ...sizes[size],
      ...v,
      ...(hover && !disabled ? variant === 'secondary' || variant === 'ghost' ? {
        background: hovers[variant]
      } : {
        background: hovers[variant]
      } : null),
      ...(disabled ? {
        background: 'var(--disabled-bg)',
        color: 'var(--disabled-text)',
        borderColor: 'transparent'
      } : null),
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  title,
  kicker,
  action,
  padding = 'var(--space-9)',
  tone = 'raised',
  children,
  style,
  ...rest
}) {
  const bg = tone === 'sunken' ? 'var(--surface-sunken)' : tone === 'flat' ? 'transparent' : 'var(--surface-card)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: 'var(--border)',
      background: bg,
      borderRadius: 'var(--radius-none)',
      ...style
    }
  }, rest), (title || kicker || action) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      padding: `var(--space-6) ${padding}`,
      borderBottom: 'var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", null, kicker && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-style-kicker)',
      color: 'var(--text-primary)',
      marginBottom: 2
    }
  }, kicker), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--size-h4)'
    }
  }, title)), action), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  label,
  children,
  size = 32,
  active = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: active ? 'var(--surface-primary-soft)' : hover ? 'var(--action-secondary-hover-bg)' : 'transparent',
      color: active ? 'var(--text-primary)' : 'var(--ink-62)',
      border: 'var(--border-width) solid transparent',
      borderRadius: 'var(--radius-none)',
      cursor: 'pointer',
      transition: 'var(--transition-control)',
      padding: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/PolicyCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PolicyCard({
  ramo,
  number,
  premium,
  premiumLabel = 'Prima mensual',
  status,
  statusTone = 'active',
  footer,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      border: 'var(--border-width) solid ' + (hover && onClick ? 'var(--line-strong)' : 'var(--line)'),
      background: 'var(--surface-card)',
      padding: 'var(--space-9)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--size-h4)'
    }
  }, ramo), number && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono)',
      color: 'var(--ink-50)',
      marginTop: 4
    }
  }, number)), status && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: statusTone
  }, status)), premium && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      fontSize: 'var(--size-ui)',
      color: 'var(--ink-62)'
    }
  }, premiumLabel, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      marginTop: 2,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: '20px',
      color: 'var(--text-body)'
    }
  }, premium)), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      paddingTop: 'var(--space-6)',
      borderTop: 'var(--border)',
      fontSize: 'var(--size-caption)',
      color: 'var(--ink-62)'
    }
  }, footer));
}
Object.assign(__ds_scope, { PolicyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PolicyCard.jsx", error: String((e && e.message) || e) }); }

// components/core/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatBlock({
  label,
  value,
  meta,
  tone = 'default',
  style,
  ...rest
}) {
  const valueColor = tone === 'accent' ? 'var(--text-accent)' : tone === 'success' ? 'var(--text-success)' : tone === 'alert' ? 'var(--text-alert)' : 'var(--text-body)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: 'var(--space-9)',
      border: 'var(--border)',
      background: 'var(--surface-card)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-style-kicker)',
      color: 'var(--ink-50)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: '30px',
      lineHeight: 1.1,
      marginTop: 'var(--space-3)',
      color: valueColor
    }
  }, value), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--ink-62)',
      marginTop: 'var(--space-2)'
    }
  }, meta));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  mono = false,
  onRemove,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      border: 'var(--border)',
      padding: '3px 8px',
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-body)',
      fontSize: mono ? 'var(--size-mono-sm)' : 'var(--size-caption)',
      color: 'var(--ink-62)',
      background: 'transparent',
      borderRadius: 'var(--radius-none)',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Quitar",
    style: {
      border: 0,
      background: 'none',
      cursor: 'pointer',
      color: 'var(--ink-50)',
      padding: 0,
      lineHeight: 1,
      fontSize: 13
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DataTable({
  columns = [],
  rows = [],
  onRowClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(-1);
  return /*#__PURE__*/React.createElement("table", _extends({
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      font: 'var(--text-style-kicker)',
      color: 'var(--ink-50)',
      padding: 'var(--space-4) var(--space-6)',
      borderBottom: 'var(--border-width) solid var(--line-strong)',
      whiteSpace: 'nowrap'
    }
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    onMouseEnter: () => setHover(i),
    onMouseLeave: () => setHover(-1),
    onClick: () => onRowClick && onRowClick(r, i),
    style: {
      background: hover === i && onRowClick ? 'var(--ink-06)' : 'transparent',
      cursor: onRowClick ? 'pointer' : 'default'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: 'var(--space-5) var(--space-6)',
      borderBottom: 'var(--border)',
      fontFamily: c.mono ? 'var(--font-mono)' : 'inherit',
      fontSize: c.mono ? 'var(--size-mono)' : 'inherit',
      color: c.muted ? 'var(--ink-62)' : 'var(--text-body)',
      fontVariantNumeric: 'tabular-nums',
      whiteSpace: 'nowrap'
    }
  }, c.render ? c.render(r) : r[c.key]))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/KeyValue.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function KeyValue({
  items = [],
  columns = 1,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("dl", _extends({
    style: {
      margin: 0,
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))`,
      borderTop: 'var(--border)',
      ...style
    }
  }, rest), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.label,
    style: {
      padding: 'var(--space-5) 0',
      borderBottom: 'var(--border)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--ink-62)'
    }
  }, it.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontSize: 'var(--size-body-sm)',
      fontFamily: it.mono ? 'var(--font-mono)' : 'inherit',
      fontVariantNumeric: 'tabular-nums',
      textAlign: 'right'
    }
  }, it.value))));
}
Object.assign(__ds_scope, { KeyValue });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/KeyValue.jsx", error: String((e && e.message) || e) }); }

// components/data/Timeline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const dots = {
  auto: 'var(--slv-ambar)',
  done: 'var(--slv-verde)',
  pending: 'var(--ink-28)',
  alert: 'var(--slv-coral)'
};
function Timeline({
  events = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      ...style
    }
  }, rest), events.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '14px 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      marginTop: 6,
      borderRadius: 'var(--radius-dot)',
      background: dots[e.tone || 'pending'],
      flex: '0 0 auto'
    }
  }), i < events.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      flex: 1,
      background: 'var(--line)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: i < events.length - 1 ? 'var(--space-8)' : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-body-sm)',
      fontWeight: 'var(--weight-medium)'
    }
  }, e.title), e.detail && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--ink-62)',
      marginTop: 2
    }
  }, e.detail), e.time && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono-sm)',
      color: 'var(--ink-50)',
      marginTop: 4
    }
  }, e.time)))));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Timeline.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  info: {
    rule: 'var(--slv-cobalto)',
    bg: 'transparent',
    ink: 'var(--text-primary)'
  },
  auto: {
    rule: 'var(--slv-ambar)',
    bg: 'var(--surface-accent-soft)',
    ink: 'var(--text-accent)'
  },
  success: {
    rule: 'var(--slv-verde)',
    bg: 'transparent',
    ink: 'var(--text-success)'
  },
  alert: {
    rule: 'var(--slv-coral)',
    bg: 'transparent',
    ink: 'var(--text-alert)'
  }
};
function Callout({
  tone = 'info',
  title,
  children,
  action,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: 'var(--border)',
      borderLeft: 'var(--border-width-strong) solid ' + t.rule,
      background: t.bg,
      padding: 'var(--space-8)',
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-style-kicker)',
      color: t.ink,
      marginBottom: 'var(--space-3)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--ink-80)'
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, action));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  kicker,
  children,
  footer,
  onClose,
  width = 460,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(16,27,45,0.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-10)',
      zIndex: 50
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--surface-raised)',
      boxShadow: 'var(--shadow-overlay)',
      border: 'var(--border)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-9)',
      borderBottom: 'var(--border)'
    }
  }, kicker && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-style-kicker)',
      color: 'var(--text-primary)',
      marginBottom: 4
    }
  }, kicker), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--size-h3)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-9)',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--ink-80)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6) var(--space-9)',
      borderTop: 'var(--border)',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-4)',
      background: 'var(--surface-sunken)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressSteps.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProgressSteps({
  steps = [],
  current = 0,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), steps.map((s, i) => {
    const done = i < current,
      active = i === current;
    return /*#__PURE__*/React.createElement("div", {
      key: s,
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 3,
        background: done || active ? 'var(--action-primary)' : 'var(--ink-14)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-3)',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--size-mono-sm)',
        color: active ? 'var(--text-primary)' : 'var(--ink-50)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, s));
  }));
}
Object.assign(__ds_scope, { ProgressSteps });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressSteps.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const inks = {
  info: 'var(--slv-cobalto)',
  success: 'var(--slv-verde)',
  alert: 'var(--slv-coral)',
  auto: 'var(--slv-ambar)'
};
function Toast({
  tone = 'info',
  message,
  detail,
  onClose,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-5)',
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-inverse)',
      padding: 'var(--space-6) var(--space-8)',
      boxShadow: 'var(--shadow-overlay)',
      maxWidth: 420,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      alignSelf: 'stretch',
      background: inks[tone],
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-body-sm)',
      fontWeight: 'var(--weight-medium)'
    }
  }, message), detail && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--paper-72)',
      marginTop: 2
    }
  }, detail)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      background: 'none',
      border: 0,
      color: 'var(--paper-72)',
      cursor: 'pointer',
      fontSize: 16,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  description,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    onClick: toggle,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: '0 0 auto',
      marginTop: 1,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'var(--border-width) solid ' + (on ? 'var(--action-primary)' : 'var(--line-strong)'),
      background: on ? 'var(--action-primary)' : 'var(--surface-raised)',
      transition: 'var(--transition-control)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2 L4.9 8.6 L9.5 3.4",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "square"
  }))), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-body)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--size-caption)',
      color: 'var(--ink-55)',
      marginTop: 2
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-caption)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--ink-72)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--slv-coral)'
    }
  }, " *")), children, error ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--text-alert)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--ink-55)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  invalid = false,
  mono = false,
  prefix,
  size = 'md',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const height = size === 'lg' ? 'var(--control-height-lg)' : size === 'sm' ? 'var(--control-height-sm)' : 'var(--control-height)';
  const input = /*#__PURE__*/React.createElement("input", _extends({
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      width: '100%',
      height,
      boxSizing: 'border-box',
      padding: '0 var(--space-5)',
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-body)',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-body)',
      background: rest.disabled ? 'var(--disabled-bg)' : 'var(--surface-raised)',
      border: 'var(--border-width) solid ' + (invalid ? 'var(--slv-coral)' : focus ? 'var(--focus-ring)' : 'var(--line-strong)'),
      outline: focus ? '1px solid ' + (invalid ? 'var(--slv-coral)' : 'var(--focus-ring)') : 'none',
      outlineOffset: '-2px',
      borderRadius: 'var(--radius-none)',
      transition: 'var(--transition-control)',
      ...(prefix ? {
        paddingLeft: 0
      } : null),
      ...style
    }
  }, rest));
  if (!prefix) return input;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      border: 'var(--border-width) solid ' + (focus ? 'var(--focus-ring)' : 'var(--line-strong)'),
      background: 'var(--surface-raised)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 var(--space-4)',
      color: 'var(--ink-50)',
      fontSize: 'var(--size-body-sm)',
      display: 'flex',
      alignItems: 'center'
    }
  }, prefix), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, React.cloneElement(input, {
    style: {
      ...input.props.style,
      border: 0,
      outline: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function RadioGroup({
  options = [],
  value,
  defaultValue,
  onChange,
  name,
  direction = 'column',
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const current = value !== undefined ? value : inner;
  const pick = v => {
    if (value === undefined) setInner(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 'var(--space-9)' : 'var(--space-4)',
      ...style
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    const desc = typeof o === 'string' ? null : o.description;
    const on = current === v;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      onClick: () => pick(v),
      style: {
        display: 'flex',
        gap: 'var(--space-4)',
        alignItems: 'flex-start',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        flex: '0 0 auto',
        marginTop: 1,
        borderRadius: 'var(--radius-dot)',
        border: 'var(--border-width) solid ' + (on ? 'var(--action-primary)' : 'var(--line-strong)'),
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--surface-raised)'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 'var(--radius-dot)',
        background: 'var(--action-primary)'
      }
    })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--size-body-sm)',
        color: 'var(--text-body)'
      }
    }, label), desc && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 'var(--size-caption)',
        color: 'var(--ink-55)',
        marginTop: 2
      }
    }, desc)), /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: v,
      checked: on,
      readOnly: true,
      style: {
        display: 'none'
      }
    }));
  }));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  size = 'md',
  invalid = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const height = size === 'lg' ? 'var(--control-height-lg)' : size === 'sm' ? 'var(--control-height-sm)' : 'var(--control-height)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height,
      boxSizing: 'border-box',
      padding: '0 32px 0 var(--space-5)',
      appearance: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-body)',
      background: 'var(--surface-raised)',
      border: 'var(--border-width) solid ' + (invalid ? 'var(--slv-coral)' : focus ? 'var(--focus-ring)' : 'var(--line-strong)'),
      borderRadius: 'var(--radius-none)',
      cursor: 'pointer',
      transition: 'var(--transition-control)'
    }
  }, rest), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--ink-50)',
      fontSize: 11
    }
  }, "\u25BE"));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    onClick: toggle,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 20,
      padding: 2,
      background: on ? 'var(--action-primary)' : 'var(--ink-28)',
      display: 'inline-flex',
      alignItems: 'center',
      transition: 'background-color var(--duration) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      background: 'var(--slv-white)',
      transform: on ? 'translateX(18px)' : 'translateX(0)',
      transition: 'transform var(--duration) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body-sm)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SideNav({
  items = [],
  value,
  onChange,
  brand,
  footer,
  width = 236,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      width,
      flex: '0 0 auto',
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-inverse)',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), brand && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-9)',
      borderBottom: 'var(--border-inverse)'
    }
  }, brand), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5) 0',
      flex: 1
    }
  }, items.map(it => {
    const v = typeof it === 'string' ? it : it.value;
    const label = typeof it === 'string' ? it : it.label;
    const count = typeof it === 'string' ? null : it.count;
    const on = value === v;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: () => onChange && onChange(v),
      style: {
        width: '100%',
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-4)',
        padding: 'var(--space-4) var(--space-9)',
        background: on ? 'rgba(245,247,244,0.08)' : 'transparent',
        borderLeft: '2px solid ' + (on ? 'var(--slv-ambar)' : 'transparent'),
        border: 0,
        borderLeftStyle: 'solid',
        borderLeftWidth: 2,
        borderLeftColor: on ? 'var(--slv-ambar)' : 'transparent',
        color: on ? 'var(--text-on-inverse)' : 'var(--paper-72)',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--size-body-sm)',
        fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-regular)',
        transition: 'var(--transition-control)'
      }
    }, /*#__PURE__*/React.createElement("span", null, label), count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--size-mono-sm)',
        color: 'var(--paper-50)'
      }
    }, count));
  })), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-9)',
      borderTop: 'var(--border-inverse)',
      fontSize: 'var(--size-caption)',
      color: 'var(--paper-50)'
    }
  }, footer));
}
Object.assign(__ds_scope, { SideNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TabBar({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      borderTop: 'var(--border)',
      background: 'var(--surface-raised)',
      ...style
    }
  }, rest), items.map(it => {
    const on = value === it.value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      onClick: () => onChange && onChange(it.value),
      style: {
        flex: 1,
        minHeight: 'var(--touch-min)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        background: 'none',
        border: 0,
        cursor: 'pointer',
        padding: 'var(--space-3) 0 var(--space-4)',
        color: on ? 'var(--text-primary)' : 'var(--ink-50)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        height: 18,
        alignItems: 'center'
      }
    }, it.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: '11px',
        fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-regular)'
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}) {
  const first = typeof items[0] === 'string' ? items[0] : items[0] && items[0].value;
  const [inner, setInner] = React.useState(defaultValue || first);
  const current = value !== undefined ? value : inner;
  const pick = v => {
    if (value === undefined) setInner(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 'var(--space-10)',
      borderBottom: 'var(--border)',
      ...style
    }
  }, rest), items.map(it => {
    const v = typeof it === 'string' ? it : it.value;
    const label = typeof it === 'string' ? it : it.label;
    const count = typeof it === 'string' ? null : it.count;
    const on = current === v;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: () => pick(v),
      style: {
        background: 'none',
        border: 0,
        borderBottom: '2px solid ' + (on ? 'var(--action-primary)' : 'transparent'),
        padding: '0 0 var(--space-4)',
        marginBottom: -1,
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--size-ui)',
        fontWeight: 'var(--weight-semibold)',
        color: on ? 'var(--text-body)' : 'var(--ink-55)',
        transition: 'var(--transition-control)'
      }
    }, label, count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--size-mono-sm)',
        color: 'var(--ink-50)',
        marginLeft: 6
      }
    }, count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TopBar({
  title,
  kicker,
  actions,
  back,
  dense = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      padding: dense ? 'var(--space-5) var(--space-9)' : 'var(--space-7) var(--space-10)',
      borderBottom: 'var(--border)',
      background: 'var(--surface-raised)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      minWidth: 0
    }
  }, back, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, kicker && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-style-kicker)',
      color: 'var(--text-primary)'
    }
  }, kicker), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: dense ? 'var(--size-h4)' : 'var(--size-h3)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title))), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, actions));
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/App.jsx
try { (() => {
const {
  TopBar,
  TabBar,
  IconButton,
  Button
} = window.SolventaDesignSystem_0139be;
function Phone({
  children,
  title,
  kicker,
  back,
  tab,
  onTab
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 712,
      background: 'var(--surface-base)',
      border: 'var(--border-width) solid var(--line-strong)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 16px',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-55)',
      background: 'var(--surface-raised)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", null, "5G \xB7 100%")), /*#__PURE__*/React.createElement(TopBar, {
    dense: true,
    kicker: kicker,
    title: title,
    back: back,
    actions: /*#__PURE__*/React.createElement(IconButton, {
      label: "Ayuda"
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "life-buoy"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), /*#__PURE__*/React.createElement(TabBar, {
    value: tab,
    onChange: onTab,
    items: [{
      value: 'wallet',
      label: 'Pólizas',
      icon: /*#__PURE__*/React.createElement("i", {
        "data-lucide": "wallet"
      })
    }, {
      value: 'claims',
      label: 'Siniestros',
      icon: /*#__PURE__*/React.createElement("i", {
        "data-lucide": "file-text"
      })
    }, {
      value: 'perfil',
      label: 'Perfil',
      icon: /*#__PURE__*/React.createElement("i", {
        "data-lucide": "user"
      })
    }]
  }));
}
function App() {
  const [screen, setScreen] = React.useState('wallet');
  const [policy, setPolicy] = React.useState(null);
  const [tab, setTab] = React.useState('wallet');
  React.useEffect(() => {
    window.lucide && lucide.createIcons({
      attrs: {
        width: 18,
        height: 18,
        'stroke-width': 1.75
      }
    });
  });
  const back = to => /*#__PURE__*/React.createElement(IconButton, {
    label: "Volver",
    onClick: () => setScreen(to)
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left"
  }));
  let view;
  if (screen === 'detail' && policy) {
    view = /*#__PURE__*/React.createElement(Phone, {
      kicker: "p\xF3liza",
      title: policy.ramo,
      back: back('wallet'),
      tab: tab,
      onTab: v => {
        setTab(v);
        setScreen('wallet');
      }
    }, /*#__PURE__*/React.createElement(PolicyDetail, {
      policy: policy,
      onReport: () => setScreen('claim')
    }));
  } else if (screen === 'claim') {
    view = /*#__PURE__*/React.createElement(Phone, {
      kicker: "siniestro",
      title: "Reportar",
      back: back('wallet'),
      tab: tab,
      onTab: v => {
        setTab(v);
        setScreen('wallet');
      }
    }, /*#__PURE__*/React.createElement(ClaimFlow, {
      onDone: () => setScreen('wallet')
    }));
  } else {
    view = /*#__PURE__*/React.createElement(Phone, {
      kicker: "billetera",
      title: "Solventa",
      tab: tab,
      onTab: setTab
    }, /*#__PURE__*/React.createElement(Wallet, {
      onOpen: p => {
        setPolicy(p);
        setScreen('detail');
      },
      onReport: () => setScreen('claim')
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      alignItems: 'flex-start'
    }
  }, view, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 300,
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-style-kicker)',
      color: 'var(--text-primary)'
    }
  }, "recorrido"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      marginTop: 4
    }
  }, "Momentos de verdad"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--ink-72)',
      maxWidth: '40ch'
    }
  }, "Una acci\xF3n primaria por pantalla, tarjetas apiladas y estados offline visibles. Toca una p\xF3liza para ver el detalle, o reporta un siniestro para recorrer el flujo de tres pasos."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setScreen('wallet')
  }, "1 \xB7 Billetera"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => {
      setPolicy(window.walletPolicies[0]);
      setScreen('detail');
    }
  }, "2 \xB7 Detalle de p\xF3liza"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setScreen('claim')
  }, "3 \xB7 Reportar siniestro"))));
}
Object.assign(window, {
  App,
  Phone
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/ClaimFlow.jsx
try { (() => {
const {
  Button,
  Field,
  Input,
  Select,
  RadioGroup,
  ProgressSteps,
  Callout,
  Checkbox,
  Badge,
  Card
} = window.SolventaDesignSystem_0139be;
function ClaimFlow({
  onDone
}) {
  const [step, setStep] = React.useState(0);
  const steps = ['Qué pasó', 'Evidencia', 'Revisión'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-9)',
      display: 'grid',
      gap: 'var(--space-8)',
      minHeight: 520,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(ProgressSteps, {
    steps: steps,
    current: step
  }), step === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: 1.12
    }
  }, "\xBFQu\xE9 pas\xF3?"), /*#__PURE__*/React.createElement(Field, {
    label: "P\xF3liza afectada"
  }, /*#__PURE__*/React.createElement(Select, {
    size: "lg",
    options: ['Seguro de viaje · #SLV-2026-08341', 'Seguro de hogar · #SLV-2026-08340']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Tipo de siniestro"
  }, /*#__PURE__*/React.createElement(RadioGroup, {
    defaultValue: "retraso",
    options: [{
      value: 'retraso',
      label: 'Retraso de vuelo',
      description: 'Se paga solo si el retraso supera 3 horas'
    }, {
      value: 'equipaje',
      label: 'Pérdida de equipaje'
    }, {
      value: 'medico',
      label: 'Gasto médico en el viaje'
    }]
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\xBFCu\xE1ndo ocurri\xF3?"
  }, /*#__PURE__*/React.createElement(Input, {
    size: "lg",
    mono: true,
    defaultValue: "09/09/2026"
  })), /*#__PURE__*/React.createElement(Button, {
    full: true,
    size: "lg",
    onClick: () => setStep(1)
  }, "Continuar con la evidencia")), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: 1.12
    }
  }, "Sube tu evidencia"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--ink-72)'
    }
  }, "Con la tarjeta de embarque basta. Si tienes factura del hotel, s\xFAbela tambi\xE9n."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, [['Tarjeta de embarque', 'camera', 'listo'], ['Factura de hotel', 'camera', 'opcional']].map(([label, icon, state]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      border: 'var(--border)',
      borderStyle: state === 'listo' ? 'solid' : 'dashed',
      padding: 'var(--space-8)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      color: 'var(--ink-50)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-body-sm)',
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono-sm)',
      color: 'var(--ink-50)',
      marginTop: 2
    }
  }, state === 'listo' ? 'IMG_0431.jpg · 1,2 MB' : 'toca para tomar una foto')), state === 'listo' && /*#__PURE__*/React.createElement(Badge, {
    tone: "active"
  }, "Listo")))), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Confirmo que la informaci\xF3n es verdadera",
    description: "Un reporte falso anula la cobertura.",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    full: true,
    size: "lg",
    onClick: () => setStep(2)
  }, "Enviar siniestro"), /*#__PURE__*/React.createElement(Button, {
    full: true,
    size: "lg",
    variant: "secondary",
    onClick: () => setStep(0)
  }, "Volver"))), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: 1.12
    }
  }, "Aprobamos tu pago"), /*#__PURE__*/React.createElement(Callout, {
    tone: "auto",
    title: "aprobado autom\xE1ticamente"
  }, "La aerol\xEDnea report\xF3 un retraso de 3h 40m en el vuelo AV8432. Supera el umbral de 3h de tu p\xF3liza, as\xED que no necesitamos revisarlo a mano."), /*#__PURE__*/React.createElement(Card, {
    kicker: "pago",
    title: "$1.240.000 COP",
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--ink-72)'
    }
  }, "A tu cuenta terminada en 4471, hoy antes de las 6pm.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono-sm)',
      color: 'var(--ink-50)'
    }
  }, "siniestro #SIN-2026-1187"), /*#__PURE__*/React.createElement(Button, {
    full: true,
    size: "lg",
    onClick: onDone
  }, "Volver a mis p\xF3lizas")));
}
Object.assign(window, {
  ClaimFlow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/ClaimFlow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/PolicyDetail.jsx
try { (() => {
const {
  Badge,
  Button,
  KeyValue,
  Card,
  Switch,
  Timeline
} = window.SolventaDesignSystem_0139be;
function PolicyDetail({
  policy,
  onReport
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-9)',
      display: 'grid',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: 1.12
    }
  }, policy.ramo), /*#__PURE__*/React.createElement(Badge, {
    tone: policy.statusTone
  }, policy.status)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono)',
      color: 'var(--ink-50)',
      marginTop: 6
    }
  }, policy.number)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-inverse)',
      padding: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-style-kicker)',
      color: 'var(--paper-50)'
    }
  }, "prima mensual"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '32px',
      marginTop: 4
    }
  }, policy.premium), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--paper-72)',
      marginTop: 6
    }
  }, "Pr\xF3ximo cobro: 12 abr 2026")), /*#__PURE__*/React.createElement(KeyValue, {
    items: [{
      label: 'Tomador',
      value: 'Ana Restrepo'
    }, {
      label: 'Vigencia',
      value: '12 mar 2026 – 12 mar 2027',
      mono: true
    }, {
      label: 'Deducible',
      value: '$0',
      mono: true
    }, {
      label: 'Cobertura máxima',
      value: '$40.000.000',
      mono: true
    }]
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Renovaci\xF3n autom\xE1tica",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Card, {
    kicker: "actividad",
    title: "\xDAltimos movimientos",
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement(Timeline, {
    events: [{
      title: 'Pago aprobado automáticamente',
      detail: 'Retraso de vuelo · $1.240.000',
      time: 'hoy 14:02',
      tone: 'auto'
    }, {
      title: 'Prima pagada',
      time: '12 mar 2026',
      tone: 'done'
    }, {
      title: 'Póliza emitida',
      time: '12 mar 2026',
      tone: 'done'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    full: true,
    size: "lg",
    onClick: onReport
  }, "Reportar siniestro"), /*#__PURE__*/React.createElement(Button, {
    full: true,
    size: "lg",
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "download"
    })
  }, "Descargar condiciones")));
}
Object.assign(window, {
  PolicyDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/PolicyDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/Wallet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  PolicyCard,
  Badge,
  Callout,
  Button
} = window.SolventaDesignSystem_0139be;
const walletPolicies = [{
  ramo: 'Seguro de viaje',
  number: '#SLV-2026-08341',
  premium: '$52.000 COP',
  status: 'Activa',
  statusTone: 'active',
  footer: 'Vigente hasta el 12 mar 2027'
}, {
  ramo: 'Seguro de hogar',
  number: '#SLV-2026-08340',
  premium: '$118.400 COP',
  status: 'Activa',
  statusTone: 'active',
  footer: 'Renovación automática activada'
}, {
  ramo: 'Seguro de auto',
  number: '#SLV-2026-08338',
  premium: '$96.000 COP',
  status: 'En revisión',
  statusTone: 'review',
  footer: 'Falta la foto del SOAT'
}];
function Wallet({
  onOpen,
  onReport
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-9)',
      display: 'grid',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-style-kicker)',
      color: 'var(--text-primary)'
    }
  }, "hola, ana"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '26px',
      lineHeight: 1.1,
      marginTop: 2
    }
  }, "Tus p\xF3lizas")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    width: "30",
    height: "30",
    alt: "Solventa"
  })), /*#__PURE__*/React.createElement(Callout, {
    tone: "auto",
    title: "pago autom\xE1tico \xB7 hoy 14:02"
  }, "Aprobamos $1.240.000 por el retraso del vuelo AV8432. Llega antes de las 6pm."), walletPolicies.map(p => /*#__PURE__*/React.createElement(PolicyCard, _extends({
    key: p.number
  }, p, {
    onClick: () => onOpen(p)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      color: 'var(--ink-50)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono-sm)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "wifi-off"
  }), " disponibles sin conexi\xF3n"), /*#__PURE__*/React.createElement(Button, {
    full: true,
    size: "lg",
    onClick: onReport
  }, "Reportar siniestro"));
}
Object.assign(window, {
  Wallet,
  walletPolicies
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/Wallet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/ClaimDetail.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  KeyValue,
  Timeline,
  Callout,
  Dialog,
  Toast,
  Tabs
} = window.SolventaDesignSystem_0139be;
function ClaimDetail({
  claim,
  onBack
}) {
  const [confirm, setConfirm] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    onClick: onBack,
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-left"
    })
  }, "Volver a la cola"), /*#__PURE__*/React.createElement(Badge, {
    tone: claim.tone
  }, claim.estado)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 'var(--space-10)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    tone: "auto",
    title: "decidido autom\xE1ticamente"
  }, "Aprobamos el pago porque la aerol\xEDnea report\xF3 un retraso de 3h 40m en el vuelo AV8432, por encima del umbral de 3h de la p\xF3liza."), /*#__PURE__*/React.createElement(Card, {
    kicker: "cronolog\xEDa",
    title: "Qu\xE9 pas\xF3 con este caso"
  }, /*#__PURE__*/React.createElement(Timeline, {
    events: [{
      title: 'Siniestro reportado desde la app',
      detail: 'Con tarjeta de embarque adjunta',
      time: 'hoy 13:48',
      tone: 'done'
    }, {
      title: 'Retraso confirmado con la aerolínea',
      detail: 'Fuente: feed de estado de vuelos',
      time: 'hoy 13:52',
      tone: 'auto'
    }, {
      title: 'Pago aprobado automáticamente',
      detail: '$1.240.000 COP · sin intervención humana',
      time: 'hoy 14:02',
      tone: 'auto'
    }, {
      title: 'Transferencia en curso',
      detail: 'Cuenta terminada en 4471',
      time: 'hoy, antes de las 6pm',
      tone: 'pending'
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    kicker: "evidencia",
    title: "Documentos",
    padding: "var(--space-9)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, ['Tarjeta de embarque', 'Reporte de aerolínea', 'Factura de hotel'].map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      border: 'var(--border)',
      padding: 'var(--space-6)',
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "file-text",
    style: {
      color: 'var(--ink-50)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-caption)'
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono-sm)',
      color: 'var(--ink-50)'
    }
  }, "PDF \xB7 240 KB")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    kicker: "caso",
    title: claim.id
  }, /*#__PURE__*/React.createElement(KeyValue, {
    items: [{
      label: 'Póliza',
      value: claim.poliza,
      mono: true
    }, {
      label: 'Tomador',
      value: claim.tomador
    }, {
      label: 'Tipo',
      value: claim.tipo
    }, {
      label: 'Monto aprobado',
      value: claim.monto,
      mono: true
    }, {
      label: 'Abierto',
      value: claim.abierto,
      mono: true
    }, {
      label: 'Canal',
      value: 'App móvil'
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    kicker: "acciones",
    title: "Resoluci\xF3n"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    full: true,
    onClick: () => setToast(true)
  }, "Confirmar pago"), /*#__PURE__*/React.createElement(Button, {
    full: true,
    variant: "secondary"
  }, "Pedir m\xE1s evidencia"), /*#__PURE__*/React.createElement(Button, {
    full: true,
    variant: "ghost",
    onClick: () => setConfirm(true)
  }, "Rechazar siniestro"))))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    message: "Confirmamos el pago",
    detail: "La transferencia sale hoy antes de las 6pm",
    onClose: () => setToast(false)
  })), /*#__PURE__*/React.createElement(Dialog, {
    open: confirm,
    onClose: () => setConfirm(false),
    kicker: "acci\xF3n irreversible",
    title: "\xBFRechazar este siniestro?",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      onClick: () => setConfirm(false)
    }, "Volver"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "danger",
      onClick: () => setConfirm(false)
    }, "Rechazar siniestro"))
  }, "El tomador recibir\xE1 el motivo del rechazo y podr\xE1 apelar durante 30 d\xEDas."));
}
Object.assign(window, {
  ClaimDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/ClaimDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Console.jsx
try { (() => {
const {
  SideNav,
  TopBar,
  Button,
  IconButton
} = window.SolventaDesignSystem_0139be;
function Console() {
  const [view, setView] = React.useState('resumen');
  const [claim, setClaim] = React.useState(null);
  React.useEffect(() => {
    window.lucide && lucide.createIcons({
      attrs: {
        width: 16,
        height: 16,
        'stroke-width': 1.75
      }
    });
  });
  const titles = {
    resumen: ['operación', 'Resumen de hoy'],
    polizas: ['cartera', 'Pólizas'],
    siniestros: ['cola de trabajo', 'Siniestros'],
    pagos: ['tesorería', 'Pagos'],
    clientes: ['crm', 'Clientes']
  };
  const [kicker, title] = titles[view] || titles.resumen;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100vh',
      minHeight: 640,
      background: 'var(--surface-base)'
    }
  }, /*#__PURE__*/React.createElement(SideNav, {
    value: view,
    onChange: v => {
      setView(v);
      setClaim(null);
    },
    items: [{
      value: 'resumen',
      label: 'Resumen'
    }, {
      value: 'polizas',
      label: 'Pólizas',
      count: 1284
    }, {
      value: 'siniestros',
      label: 'Siniestros',
      count: 128
    }, {
      value: 'pagos',
      label: 'Pagos'
    }, {
      value: 'clientes',
      label: 'Clientes'
    }],
    brand: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-mark-inverse.svg",
      width: "28",
      height: "28",
      alt: ""
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 18,
        letterSpacing: '-0.01em'
      }
    }, "Solventa")),
    footer: "Consola de operaci\xF3n \xB7 v0.1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    kicker: claim ? 'siniestro' : kicker,
    title: claim ? claim.id : title,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
      label: "Buscar"
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "search"
    })), /*#__PURE__*/React.createElement(IconButton, {
      label: "Notificaciones"
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "bell"
    })), /*#__PURE__*/React.createElement(Button, {
      size: "sm"
    }, "Nueva cotizaci\xF3n"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        background: 'var(--surface-primary-soft)',
        color: 'var(--text-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        fontWeight: 600
      }
    }, "MR"))
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 'var(--space-10) var(--space-10) var(--space-16)'
    }
  }, claim ? /*#__PURE__*/React.createElement(ClaimDetail, {
    claim: claim,
    onBack: () => setClaim(null)
  }) : view === 'polizas' ? /*#__PURE__*/React.createElement(Policies, null) : view === 'resumen' || view === 'siniestros' ? /*#__PURE__*/React.createElement(Overview, {
    onOpenClaim: r => setClaim(r)
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-55)',
      fontSize: 'var(--size-body-sm)',
      border: 'var(--border)',
      padding: 'var(--space-14)',
      background: 'var(--surface-card)'
    }
  }, "Esta vista no est\xE1 definida en el manual de marca. Se deja en blanco a prop\xF3sito."))));
}
Object.assign(window, {
  Console
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Console.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Overview.jsx
try { (() => {
const {
  StatBlock,
  Card,
  Badge,
  Button,
  DataTable,
  Callout
} = window.SolventaDesignSystem_0139be;
function Overview({
  onOpenClaim
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    label: "p\xF3lizas vigentes",
    value: "1.284",
    meta: "+38 esta semana"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    label: "siniestros hoy",
    value: "128",
    meta: "41 pagados autom\xE1ticamente",
    tone: "accent"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    label: "tiempo medio de pago",
    value: "4 min",
    meta: "param\xE9tricos",
    tone: "success"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    label: "en revisi\xF3n manual",
    value: "12",
    meta: "2 con SLA vencido",
    tone: "alert"
  })), /*#__PURE__*/React.createElement(Callout, {
    tone: "auto",
    title: "decisiones autom\xE1ticas \xB7 \xFAltimas 24h"
  }, "El motor resolvi\xF3 41 de 128 siniestros sin intervenci\xF3n humana. Cada uno registra su motivo en la l\xEDnea de tiempo del caso."), /*#__PURE__*/React.createElement(Card, {
    kicker: "cola de trabajo",
    title: "Siniestros abiertos",
    padding: "0",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary"
    }, "Exportar CSV")
  }, /*#__PURE__*/React.createElement(DataTable, {
    onRowClick: onOpenClaim,
    rows: window.claims,
    columns: [{
      key: 'id',
      header: 'siniestro',
      mono: true
    }, {
      key: 'tomador',
      header: 'tomador'
    }, {
      key: 'tipo',
      header: 'tipo'
    }, {
      key: 'monto',
      header: 'monto',
      align: 'right',
      mono: true
    }, {
      key: 'abierto',
      header: 'abierto',
      mono: true,
      muted: true
    }, {
      key: 'estado',
      header: 'estado',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone
      }, r.estado)
    }]
  })));
}
Object.assign(window, {
  Overview
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Overview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Policies.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  DataTable,
  Tabs,
  Input,
  Select,
  Tag,
  IconButton
} = window.SolventaDesignSystem_0139be;
function Policies() {
  const [tab, setTab] = React.useState('todas');
  const [q, setQ] = React.useState('');
  const rows = window.policies.filter(p => {
    if (tab === 'auto' && p.tone !== 'auto') return false;
    if (tab === 'revision' && p.tone !== 'review') return false;
    if (q && !(p.id + p.tomador).toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: 'todas',
      label: 'Todas',
      count: window.policies.length
    }, {
      value: 'auto',
      label: 'Automáticas',
      count: window.policies.filter(p => p.tone === 'auto').length
    }, {
      value: 'revision',
      label: 'En revisión',
      count: window.policies.filter(p => p.tone === 'review').length
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Buscar por p\xF3liza o tomador",
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 170
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Todos los ramos', 'Viaje', 'Hogar', 'Auto', 'Vida']
  })), /*#__PURE__*/React.createElement(Tag, {
    onRemove: () => {}
  }, "Vigencia: 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Filtros"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "sliders-horizontal"
  })), /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Nueva cotizaci\xF3n"))), /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement(DataTable, {
    rows: rows,
    onRowClick: () => {},
    columns: [{
      key: 'id',
      header: 'póliza',
      mono: true
    }, {
      key: 'tomador',
      header: 'tomador'
    }, {
      key: 'ramo',
      header: 'ramo'
    }, {
      key: 'canal',
      header: 'canal',
      muted: true
    }, {
      key: 'prima',
      header: 'prima mensual',
      align: 'right',
      mono: true
    }, {
      key: 'estado',
      header: 'estado',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone
      }, r.estado)
    }]
  }), rows.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-14)',
      textAlign: 'center',
      color: 'var(--ink-55)',
      fontSize: 'var(--size-body-sm)'
    }
  }, "No hay p\xF3lizas con ese criterio.")));
}
Object.assign(window, {
  Policies
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Policies.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/data.jsx
try { (() => {
const policies = [{
  id: '#SLV-2026-08341',
  tomador: 'Ana Restrepo',
  ramo: 'Viaje',
  prima: '$52.000',
  estado: 'Activa',
  tone: 'active',
  canal: 'App'
}, {
  id: '#SLV-2026-08340',
  tomador: 'Carlos Mejía',
  ramo: 'Hogar',
  prima: '$118.400',
  estado: 'Pago automático',
  tone: 'auto',
  canal: 'Web'
}, {
  id: '#SLV-2026-08338',
  tomador: 'Lucía Ferrer',
  ramo: 'Auto',
  prima: '$96.000',
  estado: 'En revisión',
  tone: 'review',
  canal: 'Asesor'
}, {
  id: '#SLV-2026-08336',
  tomador: 'Julián Peña',
  ramo: 'Viaje',
  prima: '$52.000',
  estado: 'Activa',
  tone: 'active',
  canal: 'App'
}, {
  id: '#SLV-2026-08334',
  tomador: 'Marta Silva',
  ramo: 'Vida',
  prima: '$204.000',
  estado: 'Activa',
  tone: 'active',
  canal: 'Web'
}, {
  id: '#SLV-2026-08331',
  tomador: 'Diego Osorio',
  ramo: 'Viaje',
  prima: '$52.000',
  estado: 'Rechazada',
  tone: 'rejected',
  canal: 'App'
}, {
  id: '#SLV-2026-08329',
  tomador: 'Paula Nieto',
  ramo: 'Hogar',
  prima: '$118.400',
  estado: 'Pago automático',
  tone: 'auto',
  canal: 'App'
}, {
  id: '#SLV-2026-08327',
  tomador: 'Andrés Gil',
  ramo: 'Auto',
  prima: '$96.000',
  estado: 'En revisión',
  tone: 'review',
  canal: 'Asesor'
}];
const claims = [{
  id: '#SIN-2026-1187',
  poliza: '#SLV-2026-08341',
  tomador: 'Ana Restrepo',
  tipo: 'Retraso de vuelo',
  monto: '$1.240.000',
  estado: 'Pago automático',
  tone: 'auto',
  abierto: 'hoy 13:48'
}, {
  id: '#SIN-2026-1186',
  poliza: '#SLV-2026-08338',
  tomador: 'Lucía Ferrer',
  tipo: 'Colisión',
  monto: '$4.900.000',
  estado: 'En revisión',
  tone: 'review',
  abierto: 'hoy 11:20'
}, {
  id: '#SIN-2026-1185',
  poliza: '#SLV-2026-08329',
  tomador: 'Paula Nieto',
  tipo: 'Daño por agua',
  monto: '$820.000',
  estado: 'Pago automático',
  tone: 'auto',
  abierto: 'ayer 18:04'
}, {
  id: '#SIN-2026-1181',
  poliza: '#SLV-2026-08331',
  tomador: 'Diego Osorio',
  tipo: 'Pérdida de equipaje',
  monto: '—',
  estado: 'Rechazada',
  tone: 'rejected',
  abierto: 'ayer 09:11'
}];
Object.assign(window, {
  policies,
  claims
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.PolicyCard = __ds_scope.PolicyCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.KeyValue = __ds_scope.KeyValue;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ProgressSteps = __ds_scope.ProgressSteps;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.SideNav = __ds_scope.SideNav;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopBar = __ds_scope.TopBar;

})();
