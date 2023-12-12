declare module '*.svg' {
    const image: string;

    export default image;
}

declare module '*.png' {
    const image: string;

    export default image;
}

declare module '*.jpg' {
    const image: string;

    export default image;
}

declare module '*.webp' {
    const image: string;

    export default image;
}

declare module Mocha {
    interface Mocha {
        addFile(file: string): void;
    }
    export default Mocha;
}
