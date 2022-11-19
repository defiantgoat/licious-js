/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LiciousButton {
        "disabled": boolean;
        "icon": "paint" | "menu" | "trash" | "save" | "rubbish" | "edit" | "close" | "logout";
        "label": string;
        "size": "sm" | "lg";
    }
    interface LiciousIcon {
        "icon": "paint" | "menu" | "trash" | "save" | "rubbish" | "edit" | "close" | "logout";
    }
    interface LiciousIconButton {
        "disabled": boolean;
        "icon": "paint" | "menu" | "trash" | "save" | "rubbish" | "edit" | "close" | "logout";
    }
    interface LiciousInput {
        "disabled": boolean;
        "placeholder": string;
        "value": string;
    }
    interface LiciousMenuButton {
        "disabled": boolean;
    }
    interface LiciousPanel {
        "header": string;
        "open": boolean;
        "size": "sm" | "md" | "lg";
    }
    interface LiciousSelect {
        "disabled": boolean;
        "options": { value: string | number, label: string }[];
    }
    interface LiciousToolbarButton {
        "disabled": boolean;
        "icon": "paint" | "trash" | "save" | "rubbish" | "edit" | "close" | "logout";
        "size": "xs" | "sm" | "lg";
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
export interface LiciousInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLLiciousInputElement;
}
declare global {
    interface HTMLLiciousButtonElement extends Components.LiciousButton, HTMLStencilElement {
    }
    var HTMLLiciousButtonElement: {
        prototype: HTMLLiciousButtonElement;
        new (): HTMLLiciousButtonElement;
    };
    interface HTMLLiciousIconElement extends Components.LiciousIcon, HTMLStencilElement {
    }
    var HTMLLiciousIconElement: {
        prototype: HTMLLiciousIconElement;
        new (): HTMLLiciousIconElement;
    };
    interface HTMLLiciousIconButtonElement extends Components.LiciousIconButton, HTMLStencilElement {
    }
    var HTMLLiciousIconButtonElement: {
        prototype: HTMLLiciousIconButtonElement;
        new (): HTMLLiciousIconButtonElement;
    };
    interface HTMLLiciousInputElement extends Components.LiciousInput, HTMLStencilElement {
    }
    var HTMLLiciousInputElement: {
        prototype: HTMLLiciousInputElement;
        new (): HTMLLiciousInputElement;
    };
    interface HTMLLiciousMenuButtonElement extends Components.LiciousMenuButton, HTMLStencilElement {
    }
    var HTMLLiciousMenuButtonElement: {
        prototype: HTMLLiciousMenuButtonElement;
        new (): HTMLLiciousMenuButtonElement;
    };
    interface HTMLLiciousPanelElement extends Components.LiciousPanel, HTMLStencilElement {
    }
    var HTMLLiciousPanelElement: {
        prototype: HTMLLiciousPanelElement;
        new (): HTMLLiciousPanelElement;
    };
    interface HTMLLiciousSelectElement extends Components.LiciousSelect, HTMLStencilElement {
    }
    var HTMLLiciousSelectElement: {
        prototype: HTMLLiciousSelectElement;
        new (): HTMLLiciousSelectElement;
    };
    interface HTMLLiciousToolbarButtonElement extends Components.LiciousToolbarButton, HTMLStencilElement {
    }
    var HTMLLiciousToolbarButtonElement: {
        prototype: HTMLLiciousToolbarButtonElement;
        new (): HTMLLiciousToolbarButtonElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "licious-button": HTMLLiciousButtonElement;
        "licious-icon": HTMLLiciousIconElement;
        "licious-icon-button": HTMLLiciousIconButtonElement;
        "licious-input": HTMLLiciousInputElement;
        "licious-menu-button": HTMLLiciousMenuButtonElement;
        "licious-panel": HTMLLiciousPanelElement;
        "licious-select": HTMLLiciousSelectElement;
        "licious-toolbar-button": HTMLLiciousToolbarButtonElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface LiciousButton {
        "disabled"?: boolean;
        "icon"?: "paint" | "menu" | "trash" | "save" | "rubbish" | "edit" | "close" | "logout";
        "label"?: string;
        "size"?: "sm" | "lg";
    }
    interface LiciousIcon {
        "icon"?: "paint" | "menu" | "trash" | "save" | "rubbish" | "edit" | "close" | "logout";
    }
    interface LiciousIconButton {
        "disabled"?: boolean;
        "icon"?: "paint" | "menu" | "trash" | "save" | "rubbish" | "edit" | "close" | "logout";
    }
    interface LiciousInput {
        "disabled"?: boolean;
        "onChanged"?: (event: LiciousInputCustomEvent<string>) => void;
        "placeholder"?: string;
        "value"?: string;
    }
    interface LiciousMenuButton {
        "disabled"?: boolean;
    }
    interface LiciousPanel {
        "header"?: string;
        "open"?: boolean;
        "size"?: "sm" | "md" | "lg";
    }
    interface LiciousSelect {
        "disabled"?: boolean;
        "options"?: { value: string | number, label: string }[];
    }
    interface LiciousToolbarButton {
        "disabled"?: boolean;
        "icon"?: "paint" | "trash" | "save" | "rubbish" | "edit" | "close" | "logout";
        "size"?: "xs" | "sm" | "lg";
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "licious-button": LiciousButton;
        "licious-icon": LiciousIcon;
        "licious-icon-button": LiciousIconButton;
        "licious-input": LiciousInput;
        "licious-menu-button": LiciousMenuButton;
        "licious-panel": LiciousPanel;
        "licious-select": LiciousSelect;
        "licious-toolbar-button": LiciousToolbarButton;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "licious-button": LocalJSX.LiciousButton & JSXBase.HTMLAttributes<HTMLLiciousButtonElement>;
            "licious-icon": LocalJSX.LiciousIcon & JSXBase.HTMLAttributes<HTMLLiciousIconElement>;
            "licious-icon-button": LocalJSX.LiciousIconButton & JSXBase.HTMLAttributes<HTMLLiciousIconButtonElement>;
            "licious-input": LocalJSX.LiciousInput & JSXBase.HTMLAttributes<HTMLLiciousInputElement>;
            "licious-menu-button": LocalJSX.LiciousMenuButton & JSXBase.HTMLAttributes<HTMLLiciousMenuButtonElement>;
            "licious-panel": LocalJSX.LiciousPanel & JSXBase.HTMLAttributes<HTMLLiciousPanelElement>;
            "licious-select": LocalJSX.LiciousSelect & JSXBase.HTMLAttributes<HTMLLiciousSelectElement>;
            "licious-toolbar-button": LocalJSX.LiciousToolbarButton & JSXBase.HTMLAttributes<HTMLLiciousToolbarButtonElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
