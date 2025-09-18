namespace Day_18_Queues_and_Stacks;

class Solution {
    private readonly Queue<char> _queue = new();
    private readonly Stack<char> _stack = new();

    private static void Main() {
        // read the string s.
        string? s = Console.ReadLine();
        
        // create the Solution class object p.
        Solution obj = new Solution();
        
        // push/enqueue all the characters of string s to stack.
        if (s == null) return;
        foreach (char c in s)
        {
            obj.PushCharacter(c);
            obj.EnqueueCharacter(c);
        }

        bool isPalindrome = true;

        // pop the top character from stack.
        // dequeue the first character from queue.
        // compare both the characters.
        for (int i = 0; i < s.Length / 2; i++)
        {
            if (obj.PopCharacter() != obj.DequeueCharacter())
            {
                isPalindrome = false;

                break;
            }
        }

        // finally print whether string s is palindrome or not.
        if (isPalindrome)
        {
            Console.Write("The word, {0}, is a palindrome.", s);
        }
        else
        {
            Console.Write("The word, {0}, is not a palindrome.", s);
        }
    }

    private char DequeueCharacter()
    {
        return _queue.Dequeue();
    }

    private char PopCharacter()
    {
        return _stack.Pop();
    }

    private void EnqueueCharacter(char c)
    {
        _queue.Enqueue(c);
    }

    private void PushCharacter(char c)
    {
        _stack.Push(c);
    }
}