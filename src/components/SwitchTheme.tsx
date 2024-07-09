import { ChangeEvent } from 'react';

interface SwitchThemeProps {
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SwitchTheme = (props: SwitchThemeProps) => {
  const { checked, onChange } = props;

  return (
    <div className="switch-container">
      <div className="switch-theme">
        <input
          id="toggle_checkbox"
          onChange={onChange}
          type="checkbox"
          checked={checked}
        />
        <label htmlFor="toggle_checkbox">
          <div id="star">
            <div className="star" id="star-1">
              ★
            </div>
            <div className="star" id="star-2">
              ★
            </div>
          </div>
          <div id="moon"></div>
        </label>
      </div>
    </div>
  );
};
