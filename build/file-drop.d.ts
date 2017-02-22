import 'fileapi';
import { EventEmitter, ElementRef } from '@angular/core';
export interface Options {
    readAs?: string;
}
export declare class FileDropDirective {
    fileOver: EventEmitter<boolean>;
    onFileDrop: EventEmitter<any>;
    onFileDropReading: EventEmitter<boolean>;
    options: Options;
    private element;
    constructor(element: ElementRef);
    onDragOver(event: any): void;
    onDragLeave(event: any): void;
    onDrop(event: any): void;
    private readFile(file);
    private emitFileOver(isOver);
    private emitFileDrop(file, name);
    private emitFileDropReading(reading);
    private pickStrategy();
    private hasStrategy(type);
    private getDataTransfer(event);
    private preventAndStop(event);
    private haveFiles(types);
}
