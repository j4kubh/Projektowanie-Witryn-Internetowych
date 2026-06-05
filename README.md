# 🐟 AquaShop – Sklep internetowy z rybami akwariowymi

## 📌 Opis projektu

**AquaShop** to responsywna aplikacja webowa typu **one-page**, prezentująca ofertę sklepu z rybami akwariowymi. Projekt został wykonany w ramach przedmiotu **„Projektowanie witryn internetowych”** i rozszerzony o warstwę backendową.

Aplikacja umożliwia dynamiczne pobieranie produktów z bazy danych, ich wyświetlanie na stronie oraz symulację procesu zakupowego.

---

## 🎯 Cel projektu

Główne cele projektu:

* zaprojektowanie nowoczesnej strony internetowej typu e-commerce,
* stworzenie semantycznej i czytelnej struktury HTML,
* przygotowanie responsywnego interfejsu użytkownika (RWD),
* implementacja interakcji w JavaScript,
* integracja warstwy frontendowej z backendem,
* wykorzystanie bazy danych SQLite,
* przygotowanie projektu pod dalszą rozbudowę.

---

## ⚙️ Funkcjonalności

### Frontend

* Responsywny interfejs (mobile, tablet, desktop)
* Menu typu hamburger
* Smooth Scroll (nawigacja One Page)
* Slider opinii klientów
* Formularz kontaktowy
* System powiadomień (Toast Notifications)
* Koszyk zakupowy:

  * dodawanie produktów,
  * usuwanie produktów,
  * zliczanie ilości produktów,
  * obliczanie wartości zamówienia,
  * zapis danych w Local Storage.

### Backend

* Serwer Node.js z wykorzystaniem Express.js
* Baza danych SQLite
* Automatyczne tworzenie tabel i danych startowych
* REST API

#### Endpoint

```http
GET /api/fish
```

Zwraca listę dostępnych produktów w formacie JSON.

---

## 🔄 Integracja Frontend–Backend

* Frontend pobiera dane z API za pomocą `fetch()`
* Produkty generowane są dynamicznie na stronie
* Brak statycznie zapisanych produktów w kodzie HTML

---

## 🧰 Technologie

### Frontend

* HTML5
* CSS3

  * Flexbox
  * CSS Grid
  * Media Queries
  * CSS Variables
* JavaScript

  * DOM API
  * Fetch API
  * Local Storage

### Backend

* Node.js
* Express.js
* SQLite3
* CORS

---

## 📁 Struktura projektu

```
AQUASHOP/
│
├── css/
│   ├── style.css
│   └── variables.css
│
├── images/
│   ├── bojownik.webp
│   ├── danio.webp
│   ├── glonojad.webp
│   ├── gupik.webp
│   ├── kirys.webp
│   ├── krewetka.webp
│   ├── molinezja.webp
│   ├── neon.webp
│   ├── razbora.webp
│   └── skalar.webp
│
├── js/
│   └── script.js
│
├── node_modules/
│
├── database.db
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

---

## 🔌 API

### Pobieranie produktów

```http
GET /api/fish
```

### Przykładowa odpowiedź

```json
[
  {
    "id": 1,
    "name": "Gupik",
    "description": "Piękna rybka ławicowa",
    "price": 15,
    "image": "gupik.webp"
  }
]
```

---

## 🗄️ Baza danych

Projekt wykorzystuje bazę danych **SQLite**.

### Tabela `fish`

| Kolumna     | Typ     |
| ----------- | ------- |
| id          | INTEGER |
| name        | TEXT    |
| description | TEXT    |
| price       | INTEGER |
| image       | TEXT    |

Po uruchomieniu serwera automatycznie dodawane jest minimum 10 przykładowych produktów.

---

## 🚀 Uruchomienie projektu

### 1. Instalacja zależności

```bash
npm install
```

### 2. Uruchomienie serwera

```bash
node server.js
```

### 3. Otworzenie aplikacji

```text
http://localhost:3000
```

---

## 🧠 Analiza UX

### 🔎 Problem użytkownika

Użytkownik potrzebuje szybkiego i intuicyjnego sposobu przeglądania oraz wyboru ryb akwariowych online.

### 👥 Grupa docelowa

* początkujący akwaryści,
* hobbyści akwarystyki,
* klienci sklepów zoologicznych online.

### 🧭 Struktura strony

Zastosowano układ **One Page**, który umożliwia szybki dostęp do wszystkich sekcji:

* Oferta
* Zalety sklepu
* Opinie klientów
* Kontakt

Takie rozwiązanie ogranicza liczbę kliknięć i poprawia doświadczenie użytkownika.

### 🎨 Interfejs użytkownika

* dominacja kolorystyki niebieskiej,
* jasne i czytelne tło,
* karty produktów w układzie Grid,
* intuicyjny koszyk zakupowy.

---

## 🔧 Możliwości rozwoju

Projekt został przygotowany pod dalszą rozbudowę:

### Backend

* dodawanie produktów,
* edycja produktów,
* usuwanie produktów,
* system użytkowników,
* autoryzacja i logowanie.

### Frontend

* obsługa logowania,
* panel użytkownika,
* integracja z systemami płatności.

### Baza danych

Możliwa migracja z SQLite do:

* PostgreSQL,
* MySQL.

---

## 📊 Wydajność i dostępność

Projekt spełnia podstawowe wymagania dotyczące wydajności i dostępności:

* Responsywny design (RWD)
* Optymalizacja obrazów (`.webp`)
* Lazy Loading obrazów
* Podstawowe wymagania WCAG:

  * teksty alternatywne (`alt`),
  * odpowiedni kontrast,
  * obsługa klawiatury.

---

## 👨‍💻 Autor

**Jakub Hetman**
Nr albumu: **160076**

---

## ⚠️ Uwagi

Projekt ma charakter edukacyjny i nie obsługuje rzeczywistych płatności.
