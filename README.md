# 🐟 AquaShop – Strona sklepu akwarystycznego

## Opis projektu

AquaShop to responsywna strona internetowa typu one-page przedstawiająca ofertę sklepu z rybami akwariowymi. Projekt został wykonany w ramach przedmiotu „Projektowanie witryn internetowych”.
Strona umożliwia przeglądanie produktów, dodawanie ich do koszyka oraz symulację procesu zakupu.


## Cel projektu

Celem projektu było:

* zaprojektowanie nowoczesnej strony internetowej,
* stworzenie czytelnej i semantycznej struktury HTML,
* przygotowanie responsywnego interfejsu użytkownika,
* implementacja interakcji w JavaScript,
* przygotowanie projektu pod przyszłą integrację z backendem.


## Funkcjonalności

* Responsywność (RWD – mobile, tablet, desktop)
* Menu hamburger na urządzeniach mobilnych
* Koszyk zakupów:

  * dodawanie produktów
  * usuwanie produktów
  * liczenie sumy
  * zapis w localStorage
* Symulacja zakupu (przycisk „Kup”)
* Powiadomienia typu toast (zamiast alertów)
* Slider opinii
* Formularz kontaktowy
* Smooth scroll między sekcjami


## Technologie

* HTML5 (semantyczne znaczniki)
* CSS3 (Flexbox, Grid, animacje, media queries)
* JavaScript (DOM, localStorage)


## Struktura projektu

```
/projekt
│
├── index.html
├── css/
│   ├── style.css
│   └── variables.css
├── js/
│   └── script.js
└── images/
```


## Główne komponenty

* **Nawigacja (nav)** – menu one-page + hamburger
* **Hero** – sekcja powitalna
* **Oferta** – produkty w układzie grid
* **Dlaczego my** – sekcja informacyjna
* **Opinie** – slider użytkowników
* **Kontakt** – formularz
* **Koszyk** – panel boczny z logiką JS


## Przygotowanie pod backend

Projekt został zaprojektowany tak, aby możliwa była jego dalsza rozbudowa:

* koszyk wykorzystuje localStorage jako symulację bazy danych,
* struktura produktów może zostać zastąpiona danymi z API,
* formularz kontaktowy może zostać podłączony do backendu (np. fetch),
* logika zakupu może zostać rozszerzona o system płatności.


## Analiza UX

### Problem użytkownika

Użytkownik chce w prosty sposób znaleźć i kupić ryby akwariowe online.

### Grupa docelowa

* osoby posiadające akwaria,
* początkujący i zaawansowani akwaryści,
* klienci sklepów zoologicznych.

### Struktura strony

Zastosowano układ one-page, który pozwala szybko przejść do interesujących sekcji:

* oferta produktów,
* opinie,
* kontakt.

Minimalizuje to liczbę kliknięć i upraszcza nawigację.

### Kolorystyka i design

* dominują kolory niebieskie (skojarzenie z wodą),
* jasne tło poprawia czytelność,
* karty produktów zwiększają przejrzystość oferty.


## Uruchomienie projektu

1. Pobierz pliki projektu
2. Otwórz `index.html` w za pomocą Live Server


## Wydajność

Projekt został zoptymalizowany pod kątem:

* szybkości ładowania,
* dostępności (WCAG – podstawowe wymagania),
* SEO (meta tagi, alt, semantyka HTML).

## Autor

Projekt wykonany przez: Jakub Hetman 160076

## Uwagi

Projekt ma charakter edukacyjny i nie obsługuje rzeczywistych płatności.
