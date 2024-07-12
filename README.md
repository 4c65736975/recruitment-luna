# Recruitment Luna [EN]

A simple web application that enables management IoT modules measuring water parameters in aquaponic farming.

**Note: This project should not be used in production; it is intended for recruitment purposes only.**

## Usage

Clone the repo with required submodule:

```sh
git clone --recurse-submodules https://github.com/4c65736975/recruitment-luna.git
```

From the project root directory:

```sh
npm install
cd "./recruitment-luna/backend/"
npm install
```

Then from the project root directory:

```sh
npm run dev
```

The application will be available at `http://localhost:5173`.

To start the backend server from the `./recruitment-luna/backend` directory:

```sh
npm run start
```

## Additional Packages Used

- **@fluentui/react-icons**: Icons
- **@fluentui/tokens**: Theme tokens
- **@griffel/react**: Styling components
- **@tanstack/react-query**: Query API (fetch, cache etc.)
- **axios**: API client

## Project Structure

```
src
|
+-- components      # Reusable components shared across the application.
|
+-- features        # Modules organized by feature, encapsulating related logic, components, and state management.
| |
| +-- modules       # Modules feature containing logic, components, and state management.
| | +-- api         # Data and services used exclusively within this feature.
| | +-- components  # Components used exclusively within this feature.
|
+-- hooks           # Custom React hooks providing reusable logic across components and features.
|
+-- models          # TypeScript or Flow types defining data structures from the API.
|
+-- helpers         # Utility functions for common tasks used throughout the application.
|
+-- api             # Configuration and utilities for integrating with APIs.
|
+-- layouts         # Layout components defining the structure of pages or sections.
|
+-- pages           # Top-level pages or screens of the application.
```

## Note

*While writing this code, I aimed to adhere to The KISS principle in coding, which stands for "Keep It Simple, Stupid." Additionally, I utilized an infrastructure that allows separation of API from the presentation layer, allowing most components to remain dumb and primarily responsible for data presentation without concern for its origin.*

*Unfortunately, I did not manage to write unit tests for components. Additionally, some elements such as the edit module form and history temperatures table were "hard-coded" because they were used only in those components. Ideally, these components should have been decomposed into smaller parts, with many elements treated as shared components (e.g., table, form, input). This approach would have resulted in cleaner and more "dumb" components (edit module form, history temperatures table).*

# Rekrutacja Luna [PL]

Prosta aplikacja webowa umożliwiająca zarządzanie modułami IoT mierzącymi parametry wody w uprawach akwaponicznych.

**Uwaga: Ten projekt nie powinien być używany w produkcji; przeznaczony jest wyłącznie do celów rekrutacyjnych.**

## Korzystanie

Sklonuj repozytorium z wymaganym submodułem:

```sh
git clone --recurse-submodules https://github.com/4c65736975/recruitment-luna.git
```

Z katalogu głównego projektu:

```sh
npm install
cd "./recruitment-luna/backend/"
npm install
```

Następnie z katalogu głównego projektu:

```sh
npm run dev
```

Aplikacja będzie dostępna pod adresem `http://localhost:5173`.

Aby uruchomić serwer backendowy z katalogu `./recruitment-luna/backend`:

```sh
npm run start
```

## Użyte dodatkowe paczki

- **@fluentui/react-icons**: Ikony
- **@fluentui/tokens**: Tokeny motywu
- **@griffel/react**: Stylizacja komponentów
- **@tanstack/react-query**: Query API (fetch, cache etc.)
- **axios**: Klient API

## Struktura Projektu

```
src
|
+-- components     # Komponenty, które są używane w różnych częściach aplikacji.
|
+-- features       # Moduły związane z funkcjonalnościami. Aktualnie istnieje tylko jeden moduł funkcjonalny:
|   |
|   +-- modules    # Główny moduł funkcjonalny zawierający logikę, komponenty i zarządzanie stanem.
|       |
|       +-- components   # Komponenty używane wyłącznie w ramach tego modułu.
|       |
|       +-- api          # Dane i usługi używane wyłącznie w ramach tego modułu.
|
+-- hooks          # Niestandardowe hooki używane w różnych częściach aplikacji.
|
+-- models         # Definicje struktur danych z API.
|
+-- helpers        # Proste funkcje pomocniczne używane w różnych częściach aplikacji.
|
+-- api            # Konfiguracja i narzędzia do integracji z API.
|
+-- layouts        # Komponenty definiujące strukturę stron lub sekcji.
|
+-- pages          # Strony aplikacji.
```

## Notka

*Podczas pisania tego kodu starałem się kierować zasadą KISS (ang. "Keep It Simple, Stupid"). Dodatkowo, użyłem infrastruktury umożliwiającej rozdzielenie API od warstwy prezentacyjnej, co pozwala większości komponentów być "głupimi" i odpowiedzialnymi głównie za prezentację danych, bez przejmowania się ich źródłem.*

*Niestety, nie udało mi się napisać testów jednostkowych dla komponentów. Dodatkowo, niektóre elementy, takie jak formularz edycji modułu czy tabela historii temperatur, zostały "zakodowane na stałe", ponieważ były używane tylko w tych komponentach. Idealnie byłoby rozłożyć te komponenty na mniejsze części, z wieloma elementami traktowanymi jako komponenty dzielone (np. tabela, formularz, input), co sprawiłoby, że te komponenty (formularz edycji modułu, tabela historii temperatur) byłyby bardziej przejrzyste i "głupie".*