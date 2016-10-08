1. `npm i`
2. Dev server: `npm run start`
3. Bundle up JS for production: `npm run production`

---
####Things I would do differently if this was a bigger project:
- JS: I would use Redux and test the code. I would also consider using Flow.
- Styling: I would use sass and structure the styling differently, and I would use another library over Bootstrap.

---
###Dummy UI
- Email and security number to find and verify user
- Update user info will turn the list items into input fields and prompt to save
- Most important correspondences - These are highlights such as "Top up failed", "fraud detected on card" etc.
- Top up issues - In case user tried to top up on the app and it didn't work. The customer agent will be able to find out why/try to resolve the issue
- If they forgot their PIN or If they tried to reset pin at an ATM but managed to get locked out 
- All correspondences - Calls, tweets, complaints, emails, fraud incidence(s)
  - sub-categories: customer requests, customer complaints, customer relations (this takes you to a section which allows you to view and file complaints/request etc)
- Close account - If they wish to leave Monzo
- Filter By Date/category or amount
- Flag button on each transaction - Eg: when a transaction is not recognised (fraud) etc
- Show all transactions - To see all, same behaviour as last 10 but longer
