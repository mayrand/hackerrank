'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}



function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const a: number[] = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    let totalSwaps: number = 0;
    for(let x = 0; x<a.length;x++){
        let swaps = 0;
        for(let y=0; y<a.length;y++){
            if(a[y]>a[y+1]){
                let temp = a[y+1];
                a[y+1]=a[y];
                a[y]=temp;
                swaps++;
            }
        }
        totalSwaps+=swaps;
    }
    console.log(`Array is sorted in ${totalSwaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length-1]}`)
}
