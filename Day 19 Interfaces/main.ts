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
    console.log('I implemented: AdvancedArithmetic')
    let line: string;
    let aa = new AdvancedArithmetic();
    while(line=readLine())
    {
        let num = Number.parseInt(line);
        console.log(aa.divisorSum(num));
    }
}

interface IAdvancedArithmetic {
    divisorSum(n: number):number;
}

class AdvancedArithmetic implements IAdvancedArithmetic
{
    divisorSum(n: number): number {
        let sum: number = 1;
        for(let i=2;i<=n;i++){
            let x = n%i;
            if(x==n || Number.isNaN(x)) break;
            else if(x>0) continue;
            sum+=i;
        }
        return sum;
    }
}