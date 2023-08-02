// ./src/generators/jetstream/generateAppVvClassesTypesTs.ts
export default function () {
    return `// ./resources/js/Types/app-vv-classes-types.ts

export interface AppVvHeadingsClasses {
    wrapper: string
    heading: string
}

export interface AppVvHeadlinesClasses {
    display1: string
    display2: string
    display3: string
    display4: string
    h1: string
    h2: string
    h3: string
    h4: string
    h5: string
    h6: string
    page: string
}

export interface AppVvOffCanvasModalClasses {
    dialog: string
    container: string
    wrapper: string
    positioning: string
    dialogPanel: string
    panelContent: string
    contentHead: string
    contentHeader: string
    marquee: string
    headline: string
    closeWrapper: string
    contentBody: string
    bodyWrap: string
}

export interface AppVvModalsWithClasses {
    offCan: AppVvOffCanvasModalClasses
}

export interface AppVvInternalPageClasses {
    wrapper: string
}

export interface AppVvPagesWithClasses {
    internal: AppVvInternalPageClasses
}

export interface AppVvClasses {
    headings: AppVvHeadingsClasses
    headlines: AppVvHeadlinesClasses
    modals: AppVvModalsWithClasses
    pages: AppVvPagesWithClasses
}
`;
}
//# sourceMappingURL=generateAppVvClassesTypesTs.js.map