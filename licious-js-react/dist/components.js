"use client";
import { createComponent } from "@stencil/react-output-target/runtime";
import { LiciousButton as LiciousButtonElement, defineCustomElement as defineLiciousButton, } from "@licious/web-components/dist/components/licious-button";
import { LiciousIconButton as LiciousIconButtonElement, defineCustomElement as defineLiciousIconButton, } from "@licious/web-components/dist/components/licious-icon-button.js";
import { LiciousIcon as LiciousIconElement, defineCustomElement as defineLiciousIcon, } from "@licious/web-components/dist/components/licious-icon.js";
import { LiciousInput as LiciousInputElement, defineCustomElement as defineLiciousInput, } from "@licious/web-components/dist/components/licious-input.js";
import { LiciousMenuButton as LiciousMenuButtonElement, defineCustomElement as defineLiciousMenuButton, } from "@licious/web-components/dist/components/licious-menu-button.js";
import { LiciousPanel as LiciousPanelElement, defineCustomElement as defineLiciousPanel, } from "@licious/web-components/dist/components/licious-panel.js";
import { LiciousSelect as LiciousSelectElement, defineCustomElement as defineLiciousSelect, } from "@licious/web-components/dist/components/licious-select.js";
import { LiciousToolbarButton as LiciousToolbarButtonElement, defineCustomElement as defineLiciousToolbarButton, } from "@licious/web-components/dist/components/licious-toolbar-button.js";
import React from "react";
export const LiciousButton = createComponent({
    tagName: "licious-button",
    elementClass: LiciousButtonElement,
    react: React,
    events: {},
    defineCustomElement: defineLiciousButton,
});
export const LiciousIcon = createComponent({
    tagName: "licious-icon",
    elementClass: LiciousIconElement,
    react: React,
    events: {},
    defineCustomElement: defineLiciousIcon,
});
export const LiciousIconButton = createComponent({
    tagName: "licious-icon-button",
    elementClass: LiciousIconButtonElement,
    react: React,
    events: {},
    defineCustomElement: defineLiciousIconButton,
});
export const LiciousInput = createComponent({
    tagName: "licious-input",
    elementClass: LiciousInputElement,
    react: React,
    events: { onChanged: "changed" },
    defineCustomElement: defineLiciousInput,
});
export const LiciousMenuButton = createComponent({
    tagName: "licious-menu-button",
    elementClass: LiciousMenuButtonElement,
    react: React,
    events: {},
    defineCustomElement: defineLiciousMenuButton,
});
export const LiciousPanel = createComponent({
    tagName: "licious-panel",
    elementClass: LiciousPanelElement,
    react: React,
    events: {},
    defineCustomElement: defineLiciousPanel,
});
export const LiciousSelect = createComponent({
    tagName: "licious-select",
    elementClass: LiciousSelectElement,
    react: React,
    events: {},
    defineCustomElement: defineLiciousSelect,
});
export const LiciousToolbarButton = createComponent({
    tagName: "licious-toolbar-button",
    elementClass: LiciousToolbarButtonElement,
    react: React,
    events: {},
    defineCustomElement: defineLiciousToolbarButton,
});
//# sourceMappingURL=components.js.map