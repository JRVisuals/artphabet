export default interface IContentBlock {
    meta: {
        author: string,
        title: string,
        type: string,
        pallette: string,
        artist: string,
    };

    rendering: {
        canvasPixelDimension: { width: number, height: number},
        smallImg: number,
        largeImg: number,
        jitter: number,
        pallette: string,
        motifPrefix: string,
        motifPattern: number[],
        motifRotation: number,
        motifSize: number,
    };

    timing: {
        shortPause: number,
        longPause: number,
        transitionTime: number,
    };

    text: string;
}