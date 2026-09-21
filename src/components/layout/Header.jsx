import ThemeSelector from "./ThemeSelector";

export default function Header() {
  return (
    <header className="app-header">
      <div className="app-header__content">
        <span className="app-header__label">Workspace</span>
        <ThemeSelector />
      </div>
    </header>
  );
}
