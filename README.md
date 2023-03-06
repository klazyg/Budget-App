This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


# :house: Budget App
My Budget App allows users to add different types of transactions with a simple form. Thanks to the clear layout, users can easily monitor their expenses, savings and income, while the graph and summaries help to quickly understand their finances.


## :gear: Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

Alternatively, you can use GitHub CLI, which allows you to clone, fork, and manage the repository directly from the command line. To clone the repository using GitHub CLI, type the following command in your terminal:

```bash
gh repo clone klazyg/Budget-App
```


## :point_right: First steps

To use the application as a user, simply:

1. Open the Budget App in your web browser () or follow the instructions in "Getting Started".
2. Fill out the form with your transaction details. Required information includes:
    * transaction name (e.g. "Grocery shopping", "Salary", "Savings" or other),
    * transaction type (income, spend, or savings),
    * amount,
    * date,
    * category.  
3. After entering the data, click the "Add" button to add the transaction to the application.

By following these steps, the application's features will be automatically updated, allowing you to immediately verify your current household budget.


## :open_book: Sample use

Here are a few ways to use the application:

* "Latest Transactions" section: Here you will find the 4 most recent transactions added through the form. You can see the transaction name, category, amount, and date. To make identification easier, each category has its own icon in the appropriate color.
* "The biggest expenses" section: Here you can see the 6 categories where you spent the most money. Categories are sorted by the amount spent, and each one is summed up after adding transactions of type "spend".
* "Revenue Chart" section: This section shows the profits you made in a given month. After adding a new transaction of type "income", the chart will be automatically updated, allowing for comparison of profits in different months.
* Additionally, on the homepage, you can find a summary of your finances, including information on earnings, expenses, and savings.
* "Menu" section: You can browse your transactions by type.

Soon, it will also be possible to log in using your own login and password to access your individual budget account.
