# Task 3

This exercise is about practicing how to research new topics, specifically the Big O notation.

You are not expected to complete this in one day, this is a research exercise that you can do when you have time to do so. Use this exercise to practice your research skills. The topic `Big O Notation` is a concept in computer science, but not commonly required in web development.

Research what is `Big O notation`. Then, add your answers directly in this file and push it to the repository.

## Question 1

In your own words, what is the Big O notation and what is it used for?

Answer: Big O notation is a way to describe the performance of an algorithm in terms of how it scales with the size of the input. It is used to compare the efficiency of different algorithms and to predict how an algorithm will perform as the input size increases.

It can be used to examine the time complexity of an algorithm, which is the amount of time an algorithm takes to run as a function of the size of the input. It can also be used to examine the space complexity of an algorithm, which is the amount of memory an algorithm uses as a function of the size of the input.

Examining the Big O notation of an algorithm can help us understand how it will perform in practice and make informed decisions about which algorithm to use in a given situation.

## Question 2

Given the following function, determine its time complexity and explain your answer.

```typescript
function isSeven(n: number): number {
    return n === 7
}
```

Answer: O(1), the function will always take the same amount of time to execute regardless of the input size.

## Question 3

Given the following function, determine its time complexity and explain your answer.

```typescript
function hasSeven(arr: number[]): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 7) {
            return true;
        }
    }
    return false;
}
```

Answer: O(n), the function will take longer to execute as the input size increases.

## Question 4

Given the following function, determine its time complexity and explain your answer.

```typescript
function printPairs(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(`Pair: ${arr[i]}, ${arr[j]}`);
        }
    }
}
```

Answer: O(n^2), the function will take longer to execute as the input size increases, and the time it takes to execute will increase quadratically with the input size.
