import { LitElement } from 'lit';
import '../licious-icon/licious-icon.js';
export declare class LiciousButton extends LitElement {
    static styles: import("lit").CSSResult;
    icon: "paint" | "menu" | "trash" | "save" | "rubbish" | "edit" | "close" | "logout";
    size: "sm" | "lg";
    label: string;
    disabled: boolean;
    render(): void;
}
interface LiciousButtonProps {
    icon: string;
    size: string;
    label: string;
    disabled: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        "licious-button": LiciousButton;
    }
    namespace JSX {
        interface IntrinsicElements {
            "licious-button": LiciousButtonProps;
        }
    }
}
export {};
//# sourceMappingURL=licious-button.d.ts.map