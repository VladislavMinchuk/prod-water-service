# 📦 Water Distribution Generator (CLI, TypeScript)

This CLI application generates **monthly water distribution sheets** in Excel format, based on input Excel files. The project is written in TypeScript.

---

## 🚀 Quick Start

1. Clone the repository:

   ```bash
   git clone git@github.com:VladislavMinchuk/prod-water-service.git
   cd prod-water-service
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the generator:

   ```bash
   npm run start
   ```

## 🔄 Example Usage
```
npm run start -- -f january -h true -n 8
```

`-f january` - output file name will be [location]_january.xlsx

`-h true` - generate a report for **half of the month**

`-n 8` - start numbering the distribution sheets from 8
