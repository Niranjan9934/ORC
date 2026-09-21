import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Palette } from "lucide-react";
import { getTheme, setTheme, THEMES } from "../../theme/themes";

export default function ThemeSelector() {
  const [currentTheme, setCurrentTheme] = useState(getTheme());
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef(null);
  const selectedTheme =
    THEMES.find((theme) => theme.id === currentTheme) ?? THEMES[0];

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!selectorRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const selectTheme = (themeId) => {
    const selected = setTheme(themeId);
    setCurrentTheme(selected);
    setIsOpen(false);
  };

  return (
    <div className="theme-selector" ref={selectorRef}>
      <button
        type="button"
        className="theme-selector__trigger"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <Palette size={17} aria-hidden="true" />
        <span className="theme-selector__current">{selectedTheme.name}</span>
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={isOpen ? "theme-selector__chevron--open" : ""}
        />
      </button>

      {isOpen && (
        <div className="theme-selector__menu" role="menu" aria-label="Select theme">
          <p className="theme-selector__title">Select Theme</p>
          {THEMES.map((theme) => {
            const isSelected = theme.id === currentTheme;

            return (
              <button
                type="button"
                role="menuitemradio"
                aria-checked={isSelected}
                key={theme.id}
                className={`theme-selector__option${isSelected ? " theme-selector__option--selected" : ""}`}
                onClick={() => selectTheme(theme.id)}
              >
                <span
                  className="theme-selector__swatch"
                  style={{ backgroundColor: theme.colors.accent }}
                  aria-hidden="true"
                />
                <span className="theme-selector__option-copy">
                  <span className="theme-selector__option-name">{theme.name}</span>
                  <span className="theme-selector__description">{theme.description}</span>
                </span>
                {isSelected && <Check size={17} className="theme-selector__check" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
