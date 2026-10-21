import type { Question } from '../types/nihss'

export const questions: Question[] = [
  {
    id: '1a',
    title: '1a. Poziom świadomości',
    description: 'Ocena ogólnego poziomu przytomności i reaktywności pacjenta.',
    instructions:
      'Jak przeprowadzić badanie? Oceń spontaniczną reakcję pacjenta, następnie reakcję na łagodny bodziec, powtarzaną stymulację oraz — jeśli jest to konieczne — silny lub bolesny bodziec. Wybierz odpowiedź także wtedy, gdy pełne badanie utrudniają intubacja, bariera językowa albo uraz lub opatrunek w obrębie ust. Wynik 3 można przyznać wyłącznie wtedy, gdy pacjent nie wykonuje żadnego ruchu poza odruchowym prężeniem w odpowiedzi na bodziec bólowy.',
    answers: [
      { score: 0, text: 'Przytomny, w pełni reaguje' },
      {
        score: 1,
        text: 'Nie w pełni przytomny, ale budzi się po niewielkim bodźcu i wykonuje polecenia, odpowiada lub reaguje',
      },
      {
        score: 2,
        text: 'Wymaga powtarzanej stymulacji, aby utrzymać uwagę, albo silnego lub bolesnego bodźca, aby wykonać ruch inny niż stereotypowy',
      },
      {
        score: 3,
        text: 'Reaguje jedynie odruchowo ruchowo lub autonomicznie albo pozostaje całkowicie bez reakcji, wiotki i bez odruchów',
      },
    ],
  },
  {
    id: '1b',
    title: '1b. Pytania dotyczące orientacji',
    description: 'Ocena orientacji pacjenta co do aktualnego miesiąca i własnego wieku.',
    instructions:
      'Jak przeprowadzić badanie? Zapytaj pacjenta, jaki jest obecnie miesiąc i ile ma lat. Odpowiedź musi być dokładna — odpowiedź zbliżona nie daje części punktu. Oceniaj wyłącznie pierwszą odpowiedź i nie pomagaj wskazówkami słownymi ani niewerbalnymi. Pacjent z afazją lub w stuporze, który nie rozumie pytań, otrzymuje 2 punkty. Pacjent, który nie może mówić z powodu intubacji dotchawiczej, urazu ust, ciężkiej dyzartrii, bariery językowej lub innej przyczyny niezwiązanej z afazją, otrzymuje 1 punkt.',
    answers: [
      { score: 0, text: 'Prawidłowo odpowiada na oba pytania' },
      { score: 1, text: 'Prawidłowo odpowiada na jedno pytanie' },
      { score: 2, text: 'Nie odpowiada prawidłowo na żadne pytanie' },
    ],
  },
  {
    id: '1c',
    title: '1c. Wykonywanie poleceń',
    description: 'Ocena rozumienia i wykonania dwóch prostych poleceń.',
    instructions:
      'Jak przeprowadzić badanie? Poproś pacjenta, aby otworzył i zamknął oczy, a następnie zacisnął i rozluźnił dłoń kończyny bez niedowładu. Jeżeli nie można użyć dłoni, zastosuj inne proste polecenie jednoetapowe. Uznaj zadanie za wykonane, gdy pacjent podejmuje jednoznaczną próbę, ale nie kończy ruchu z powodu osłabienia. Jeżeli nie reaguje na polecenie słowne, zademonstruj zadanie pantomimą i oceń wykonanie. Przy urazie, amputacji lub innej przeszkodzie fizycznej zastosuj odpowiednie zastępcze polecenia jednoetapowe. Oceniaj wyłącznie pierwszą próbę.',
    answers: [
      { score: 0, text: 'Prawidłowo wykonuje oba zadania' },
      { score: 1, text: 'Prawidłowo wykonuje jedno zadanie' },
      { score: 2, text: 'Nie wykonuje prawidłowo żadnego zadania' },
    ],
  },
  {
    id: '2',
    title: '2. Skojarzone ruchy gałek ocznych',
    description: 'Ocena poziomych ruchów gałek ocznych i obecności przymusowego zwrotu spojrzenia.',
    instructions:
      'Jak przeprowadzić badanie? Badaj wyłącznie ruchy poziome. Oceniaj ruchy dowolne lub odruchowe w próbie oczno-głowowej; nie wykonuj próby kalorycznej. Jeżeli skojarzone zbaczanie oczu można pokonać ruchem dowolnym lub odruchowym, przyznaj 1 punkt. Izolowane obwodowe porażenie nerwu III, IV lub VI również oznacza 1 punkt. Badanie można wykonać u pacjenta z afazją. Przy urazie oka, opatrunkach, wcześniejszej ślepocie lub innych zaburzeniach ostrości albo pola widzenia oceń ruchy odruchowe. Pomocne może być nawiązanie kontaktu wzrokowego i przemieszczanie się po obu stronach pacjenta.',
    answers: [
      { score: 0, text: 'Ruchy gałek ocznych prawidłowe' },
      {
        score: 1,
        text: 'Częściowe porażenie spojrzenia; nieprawidłowy ruch jednego lub obu oczu bez przymusowego zbaczania ani całkowitego porażenia spojrzenia',
      },
      {
        score: 2,
        text: 'Przymusowe zbaczanie lub całkowite porażenie spojrzenia, którego nie można pokonać próbą oczno-głowową',
      },
    ],
  },
  {
    id: '3',
    title: '3. Pole widzenia',
    description: 'Ocena ubytków pola widzenia w górnych i dolnych kwadrantach.',
    instructions:
      'Jak przeprowadzić badanie? Zbadaj konfrontacyjnie górne i dolne kwadranty pola widzenia, stosując liczenie palców lub bodziec zagrażający. Możesz zachęcać pacjenta; prawidłowe skierowanie wzroku w stronę poruszających się palców można uznać za wynik prawidłowy. Przy jednostronnej ślepocie lub braku gałki ocznej oceń pole widzenia drugiego oka. Przyznaj 1 punkt tylko przy wyraźnej asymetrii, także kwadrantanopsji. Ślepota niezależnie od przyczyny oznacza 3 punkty. Wykonaj również podwójną jednoczesną stymulację; wygaszanie oznacza 1 punkt w tym punkcie, a wynik wykorzystaj także w punkcie 11.',
    answers: [
      { score: 0, text: 'Bez ubytku pola widzenia' },
      { score: 1, text: 'Częściowe niedowidzenie połowicze, w tym kwadrantanopsja' },
      { score: 2, text: 'Całkowite niedowidzenie połowicze' },
      {
        score: 3,
        text: 'Obustronne niedowidzenie połowicze lub ślepota, w tym ślepota korowa',
      },
    ],
  },
  {
    id: '4',
    title: '4. Porażenie mięśni twarzy',
    description: 'Ocena symetrii ruchów górnej i dolnej części twarzy.',
    instructions:
      'Jak przeprowadzić badanie? Poproś pacjenta — słownie lub pantomimą — aby pokazał zęby albo uśmiechnął się, uniósł brwi i mocno zamknął oczy. U pacjenta słabo reagującego lub nierozumiejącego poleceń oceń symetrię grymasu na bodziec bólowy. Jeśli uraz twarzy, opatrunek, rurka ustno-tchawicza, plaster lub inna przeszkoda zasłania twarz, usuń ją w możliwym i bezpiecznym zakresie.',
    answers: [
      { score: 0, text: 'Prawidłowe, symetryczne ruchy twarzy' },
      {
        score: 1,
        text: 'Niewielki niedowład: spłycenie bruzdy nosowo-wargowej lub asymetria uśmiechu',
      },
      {
        score: 2,
        text: 'Częściowe porażenie: całkowite lub prawie całkowite porażenie dolnej części twarzy',
      },
      {
        score: 3,
        text: 'Całkowite porażenie jednej lub obu stron: brak ruchu górnej i dolnej części twarzy',
      },
    ],
  },
  {
    id: '5a',
    title: '5a. Siła lewej kończyny górnej',
    description: 'Ocena utrzymania lewej kończyny górnej przeciw sile ciężkości przez 10 sekund.',
    instructions:
      'Jak przeprowadzić badanie? Ułóż lewą kończynę górną wyprostowaną, dłonią w dół, pod kątem 90° u pacjenta siedzącego lub 45° u pacjenta leżącego. Oceniaj opadanie przed upływem 10 sekund. Kończyny badaj osobno, zaczynając od kończyny bez niedowładu. Pacjenta z afazją zachęcaj stanowczym głosem i pantomimą, ale nie bodźcem bólowym. UN wybierz wyłącznie przy amputacji kończyny lub usztywnieniu stawu ramiennego i odnotuj przyczynę.',
    answers: [
      { score: 0, text: 'Bez opadania; utrzymuje pozycję przez pełne 10 sekund' },
      {
        score: 1,
        text: 'Kończyna opada przed upływem 10 sekund, ale nie dotyka łóżka ani innego podparcia',
      },
      {
        score: 2,
        text: 'Pewien wysiłek przeciw sile ciężkości; nie osiąga lub nie utrzymuje pozycji i opada na łóżko',
      },
      { score: 3, text: 'Brak wysiłku przeciw sile ciężkości; kończyna opada' },
      { score: 4, text: 'Brak ruchu' },
      { score: 'UN', text: 'Niemożliwe do zbadania: amputacja lub usztywnienie stawu ramiennego; podaj przyczynę' },
    ],
  },
  {
    id: '5b',
    title: '5b. Siła prawej kończyny górnej',
    description: 'Ocena utrzymania prawej kończyny górnej przeciw sile ciężkości przez 10 sekund.',
    instructions:
      'Jak przeprowadzić badanie? Ułóż prawą kończynę górną wyprostowaną, dłonią w dół, pod kątem 90° u pacjenta siedzącego lub 45° u pacjenta leżącego. Oceniaj opadanie przed upływem 10 sekund. Kończyny badaj osobno, zaczynając od kończyny bez niedowładu. Pacjenta z afazją zachęcaj stanowczym głosem i pantomimą, ale nie bodźcem bólowym. UN wybierz wyłącznie przy amputacji kończyny lub usztywnieniu stawu ramiennego i odnotuj przyczynę.',
    answers: [
      { score: 0, text: 'Bez opadania; utrzymuje pozycję przez pełne 10 sekund' },
      {
        score: 1,
        text: 'Kończyna opada przed upływem 10 sekund, ale nie dotyka łóżka ani innego podparcia',
      },
      {
        score: 2,
        text: 'Pewien wysiłek przeciw sile ciężkości; nie osiąga lub nie utrzymuje pozycji i opada na łóżko',
      },
      { score: 3, text: 'Brak wysiłku przeciw sile ciężkości; kończyna opada' },
      { score: 4, text: 'Brak ruchu' },
      { score: 'UN', text: 'Niemożliwe do zbadania: amputacja lub usztywnienie stawu ramiennego; podaj przyczynę' },
    ],
  },
  {
    id: '6a',
    title: '6a. Siła lewej kończyny dolnej',
    description: 'Ocena utrzymania lewej kończyny dolnej przeciw sile ciężkości przez 5 sekund.',
    instructions:
      'Jak przeprowadzić badanie? Zawsze badaj pacjenta w pozycji leżącej. Unieś lewą kończynę dolną pod kątem 30° i oceń opadanie przed upływem 5 sekund. Kończyny badaj osobno, zaczynając od kończyny bez niedowładu. Pacjenta z afazją zachęcaj stanowczym głosem i pantomimą, ale nie bodźcem bólowym. UN wybierz wyłącznie przy amputacji kończyny lub usztywnieniu stawu biodrowego i odnotuj przyczynę.',
    answers: [
      { score: 0, text: 'Bez opadania; utrzymuje pozycję 30° przez pełne 5 sekund' },
      {
        score: 1,
        text: 'Kończyna opada przed upływem 5 sekund, ale nie dotyka łóżka',
      },
      {
        score: 2,
        text: 'Pewien wysiłek przeciw sile ciężkości; kończyna opada na łóżko w ciągu 5 sekund',
      },
      {
        score: 3,
        text: 'Brak wysiłku przeciw sile ciężkości; kończyna natychmiast opada na łóżko',
      },
      { score: 4, text: 'Brak ruchu' },
      { score: 'UN', text: 'Niemożliwe do zbadania: amputacja lub usztywnienie stawu biodrowego; podaj przyczynę' },
    ],
  },
  {
    id: '6b',
    title: '6b. Siła prawej kończyny dolnej',
    description: 'Ocena utrzymania prawej kończyny dolnej przeciw sile ciężkości przez 5 sekund.',
    instructions:
      'Jak przeprowadzić badanie? Zawsze badaj pacjenta w pozycji leżącej. Unieś prawą kończynę dolną pod kątem 30° i oceń opadanie przed upływem 5 sekund. Kończyny badaj osobno, zaczynając od kończyny bez niedowładu. Pacjenta z afazją zachęcaj stanowczym głosem i pantomimą, ale nie bodźcem bólowym. UN wybierz wyłącznie przy amputacji kończyny lub usztywnieniu stawu biodrowego i odnotuj przyczynę.',
    answers: [
      { score: 0, text: 'Bez opadania; utrzymuje pozycję 30° przez pełne 5 sekund' },
      {
        score: 1,
        text: 'Kończyna opada przed upływem 5 sekund, ale nie dotyka łóżka',
      },
      {
        score: 2,
        text: 'Pewien wysiłek przeciw sile ciężkości; kończyna opada na łóżko w ciągu 5 sekund',
      },
      {
        score: 3,
        text: 'Brak wysiłku przeciw sile ciężkości; kończyna natychmiast opada na łóżko',
      },
      { score: 4, text: 'Brak ruchu' },
      { score: 'UN', text: 'Niemożliwe do zbadania: amputacja lub usztywnienie stawu biodrowego; podaj przyczynę' },
    ],
  },
  {
    id: '7',
    title: '7. Ataksja kończyn',
    description: 'Ocena ataksji móżdżkowej kończyn, niezależnej od osłabienia siły mięśniowej.',
    instructions:
      'Jak przeprowadzić badanie? Badaj przy otwartych oczach. Wykonaj obustronnie próbę palec–nos–palec oraz pięta–goleń. Przy ubytku pola widzenia prowadź badanie w zachowanym polu. Ataksję zaliczaj tylko wtedy, gdy jest nieproporcjonalna do niedowładu. U pacjenta, który nie rozumie polecenia lub jest porażony, ataksję uznaje się za nieobecną. U osoby niewidomej poproś o dotknięcie nosa z pozycji wyprostowanej kończyny górnej. UN wybierz wyłącznie przy amputacji lub usztywnieniu stawu uniemożliwiającym badanie i odnotuj przyczynę.',
    answers: [
      { score: 0, text: 'Ataksja nieobecna' },
      { score: 1, text: 'Ataksja obecna w jednej kończynie' },
      { score: 2, text: 'Ataksja obecna w dwóch kończynach' },
      { score: 'UN', text: 'Niemożliwe do zbadania: amputacja lub usztywnienie stawu; podaj przyczynę' },
    ],
  },
  {
    id: '8',
    title: '8. Czucie',
    description: 'Ocena utraty czucia bólu i dotyku przypisywanej udarowi.',
    instructions:
      'Jak przeprowadzić badanie? Oceń czucie ukłuciem; u pacjenta z obniżoną świadomością lub afazją obserwuj grymas albo reakcję cofania na bodziec bólowy. Oceniaj wyłącznie zaburzenia czucia spowodowane udarem. Zbadaj tyle obszarów, ile potrzeba do oceny połowiczego ubytku: kończyny górne z pominięciem dłoni, kończyny dolne, tułów i twarz. Wynik 2 przyznaj tylko przy jednoznacznie wykazanej ciężkiej lub całkowitej utracie czucia. Obustronna utrata czucia w udarze pnia mózgu oznacza 2 punkty. Pacjent bez reakcji z tetraplegią oraz pacjent w śpiączce z wynikiem 1a = 3 automatycznie otrzymuje 2 punkty.',
    answers: [
      { score: 0, text: 'Czucie prawidłowe; brak ubytku' },
      {
        score: 1,
        text: 'Łagodna lub umiarkowana utrata czucia: ukłucie jest odczuwane jako mniej ostre lub tępe albo pacjent czuje dotyk mimo utraty powierzchownego czucia bólu',
      },
      {
        score: 2,
        text: 'Ciężka lub całkowita utrata czucia: pacjent nie odczuwa dotyku na twarzy, kończynie górnej i kończynie dolnej',
      },
    ],
  },
  {
    id: '9',
    title: '9. Afazja',
    description: 'Ocena rozumienia mowy, nazywania, czytania i wypowiedzi spontanicznej.',
    instructions:
      'Jak przeprowadzić badanie? Wykorzystaj oficjalne materiały NIHSS: poproś pacjenta o opis ilustracji, nazwanie przedmiotów z planszy i przeczytanie zdań. Rozumienie oceń na podstawie tych odpowiedzi oraz wykonywania poleceń we wcześniejszych częściach badania. Jeśli zaburzenia widzenia uniemożliwiają użycie materiałów wzrokowych, poproś o rozpoznanie przedmiotów umieszczonych w dłoni, powtarzanie i samodzielne tworzenie wypowiedzi. Pacjent zaintubowany powinien pisać. Pacjent w śpiączce z wynikiem 1a = 3 automatycznie otrzymuje 3 punkty. U pacjenta w stuporze lub z ograniczoną współpracą trzeba wybrać wynik; 3 punkty przyznaj tylko wtedy, gdy pacjent jest niemy i nie wykonuje żadnego polecenia jednoetapowego.',
    answers: [
      { score: 0, text: 'Bez afazji; mowa prawidłowa' },
      {
        score: 1,
        text: 'Afazja łagodna lub umiarkowana: wyraźne ograniczenie płynności albo rozumienia, ale bez istotnego ograniczenia przekazywanych treści; rozmowa o materiałach jest utrudniona',
      },
      {
        score: 2,
        text: 'Afazja ciężka: komunikacja fragmentaryczna, wymaga domyślania się i pytań; zakres przekazywanych informacji jest ograniczony',
      },
      {
        score: 3,
        text: 'Niemota lub afazja globalna; brak użytecznej mowy i rozumienia słuchowego',
      },
    ],
  },
  {
    id: '10',
    title: '10. Dyzartria',
    description: 'Ocena wyrazistości artykulacji niezależnie od zaburzeń językowych.',
    instructions:
      'Jak przeprowadzić badanie? Jeżeli mowa wydaje się prawidłowa, uzyskaj odpowiednio długą próbkę, prosząc pacjenta o przeczytanie lub powtórzenie słów z oficjalnej listy NIHSS. Przy ciężkiej afazji oceń artykulację w mowie spontanicznej. Nie informuj pacjenta, dlaczego oceniasz jego mowę. UN wybierz wyłącznie wtedy, gdy intubacja lub inna fizyczna przeszkoda uniemożliwia wytworzenie mowy, i odnotuj przyczynę.',
    answers: [
      { score: 0, text: 'Artykulacja prawidłowa' },
      {
        score: 1,
        text: 'Dyzartria łagodna lub umiarkowana: pacjent niewyraźnie wypowiada co najmniej część słów, ale można go zrozumieć, najwyżej z pewną trudnością',
      },
      {
        score: 2,
        text: 'Dyzartria ciężka: mowa jest niezrozumiała bez afazji lub niewspółmiernie do jej nasilenia albo pacjent jest niemy lub anartryczny',
      },
      { score: 'UN', text: 'Niemożliwe do zbadania: intubacja lub inna fizyczna przeszkoda w wytwarzaniu mowy; podaj przyczynę' },
    ],
  },
  {
    id: '11',
    title: '11. Nieuwaga i zaniedbywanie stronne',
    description: 'Ocena wygaszania i nieuwagi wzrokowej, czuciowej, słuchowej, przestrzennej lub osobistej.',
    instructions:
      'Jak przeprowadzić badanie? Wykorzystaj informacje z wcześniejszych prób oraz podwójną jednoczesną stymulację wzrokową i czuciową. Jeżeli ciężki ubytek widzenia uniemożliwia obustronną stymulację wzrokową, a stymulacja skórna jest prawidłowa, wynik wynosi 0. Pacjent z afazją, który wyraźnie kieruje uwagę na obie strony, również otrzymuje 0. Zaniedbywanie wzrokowo-przestrzenne lub anozognozję można uznać za dowód nieprawidłowości. Ten punkt nigdy nie jest oznaczany jako UN.',
    answers: [
      { score: 0, text: 'Brak nieprawidłowości' },
      {
        score: 1,
        text: 'Nieuwaga wzrokowa, czuciowa, słuchowa, przestrzenna lub osobista albo wygaszanie przy obustronnej jednoczesnej stymulacji w jednej modalności',
      },
      {
        score: 2,
        text: 'Głęboka nieuwaga połowicza lub wygaszanie w więcej niż jednej modalności; pacjent nie rozpoznaje własnej ręki albo orientuje się tylko ku jednej stronie przestrzeni',
      },
    ],
  },
]
