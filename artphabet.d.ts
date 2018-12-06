declare type CanvasSettings = {
    canvasPixelDimension: { width: number, height: number };
    content: string;
    pallette: string;
    smallImg: number;
    largeImg: number;
    jitter: number;
    motifData: {prefix: string, pattern: number[], rotation: number, size: number};
    shortPause: number;
    longPause: number;
    transitionTime: number;
}