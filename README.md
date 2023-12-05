This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Data Structures:

## Two Pointers:

    1. Given a sorted array of integers and a target value, determine if there exists two integers in the array that sum up to the target value. -> https://chat.openai.com/share/fe8099cb-af05-4c8a-8315-9b5d7be8e93e or https://outco.teachable.com/courses/438359/lectures/6721929

    2. Sort Bit Array [0, 1, 1, 0] => [0, 0, 1, 1]
        ```const sortBitArray = (arr) => {
            let left = 0;
            let right = arr.length - 1;

            // manipulate the array

            while (left < right) {
                // if left == 1 && right == 0 swap arr[left] and arr[right]
                // OR if right == 0 && left == 1 swap arr[left] and arr[right]
                if (
                (arr[left] == 1 && arr[right] == 0) ||
                (arr[right] == 0 && arr[left] == 1)
                ) {
                console.log("arr before", arr);
                [arr[left], arr[right]] = [arr[right], arr[left]];
                console.log("arr after", arr);
                }
                //  if left == 0 left++;
                // else if right == 1 right--;
                if (arr[left] == 0) {
                console.log("left", left);
                left++;
                }
                if (arr[right] == 1) {
                console.log("right", right);
                right--;
                }
            }
            return arr;
            };

            console.log(
            "sortBitArray",
            sortBitArray([
                1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0,
            ])
            );

            // [0, 1, 1, 0, 1, 1, 1, 0]
            // if left == 1 move up to a 1
            // if right == 0
            // [0, 1, 0, 1, 0]
            //  l           r
            //     l        r
            ```
