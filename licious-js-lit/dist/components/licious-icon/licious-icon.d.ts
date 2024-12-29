import { LitElement } from 'lit';
export declare class LiciousIcon extends LitElement {
    static styles: import("lit").CSSResult;
    getIcon(icon: string): any;
    icon: "paint" | "menu" | "trash" | "save" | "rubbish" | "edit" | "close" | "logout";
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "licious-icon": LiciousIcon;
    }
}
//# sourceMappingURL=licious-icon.d.ts.map