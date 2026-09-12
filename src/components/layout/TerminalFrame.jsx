/**
 * Boxy "window chrome" every page renders its content inside — a bordered
 * panel with a fake file-path header, matching the Lumon terminal look.
 */
export default function TerminalFrame({ title, children }) {
  return (
    <section className="terminal-frame">
      <header className="terminal-frame__header">
        <span>{title}</span>
        <span className="terminal-frame__header-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </header>
      <div className="terminal-frame__body">{children}</div>
    </section>
  );
}
