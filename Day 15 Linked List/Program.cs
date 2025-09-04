using System;


Node head = null;
int T = Int32.Parse(Console.ReadLine());
while (T-- > 0)
{
    int data = Int32.Parse(Console.ReadLine());
    head = insert(head, data);
}

display(head);

static Node getTail(Node head)
{
    var current = head;
    while (current.next is not null)
    {
        current = current.next;
    }

    return current;
}

static Node insert(Node head, int data)
{
    var node = new Node(data);
    if (head is null)
        return node;
    var tail = getTail(head);
    tail.next = node;
    return head;
}

static void display(Node head)
{
    Node start = head;
    while (start != null)
    {
        Console.Write(start.data + " ");
        start = start.next;
    }
}

class Node
{
    public int data;
    public Node next;

    public Node(int d)
    {
        data = d;
        next = null;
    }
}