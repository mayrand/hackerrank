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
    let line: string;
    while(line = readLine()){
        let nums = line.split(" ");
        if(nums.length<2) continue;
        try{
            console.log(new Calculator().power(Number.parseInt(nums[0]),Number.parseInt(nums[1])));
        }
        catch(e){
            if (e instanceof Error){
                console.log(e.message);
            }
        }
    }
}

class Calculator{
    power(n:number,p:number): number {
        if(n<0 || p<0)
            throw new Error('n and p should be non-negative');
        return n**p;
    }
}