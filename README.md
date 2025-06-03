# zeller-date

Une petite bibliothèque JavaScript qui utilise la **congruence de Zeller** pour déterminer le jour de la semaine à partir d'une date (jour, mois, année).

## 🚀 Installation

```bash
npm install zeller-date
```

## 📦 Utilisation

### CommonJS (Node.js)

```javascript
const { getDayName, zeller } = require('zeller-date');

// Retourne le jour de la semaine (en anglais)
console.log(getDayName(3, 6, 2025)); // "Tuesday"

// Retourne la valeur de Zeller (0 = samedi, 1 = dimanche, ..., 6 = vendredi)
console.log(zeller(3, 6, 2025)); // 3
```

## 📅 Correspondance des valeurs Zeller

| Valeur retournée par `zeller()` | Jour de la semaine |
|-------------------------------|--------------------|
| 0                             | Saturday           |
| 1                             | Sunday             |
| 2                             | Monday             |
| 3                             | Tuesday            |
| 4                             | Wednesday          |
| 5                             | Thursday           |
| 6                             | Friday             |

## 🛠️ Fonctions exportées

### `zeller(day, month, year)`

- `day`: Numéro du jour (1-31)
- `month`: Mois (1-12)
- `year`: Année complète (ex. 2025)

Retourne la valeur Zeller (0–6).

### `getDayName(day, month, year)`

Retourne directement le jour de la semaine sous forme de chaîne (ex. `"Monday"`).

## 🧪 Exemple

```javascript
const { getDayName } = require('zeller-date');

console.log(getDayName(14, 7, 1789)); // "Tuesday" (Révolution française !)
```

## 📝 Licence

MIT © Abdelwaheb
