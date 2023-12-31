const en_instructions = (
  <>
    <p>
      Oyuncular odaya katıldığında hepsine bir dizi rastgele bilgi verilir.
      sayılar, bu sayılar o turdaki oyuncular arasında benzersizdir.
    </p>
    <p>
      Çekiliş numaraları ana ekranda gösterilecektir. Oyuncu ekranında çekilişe
      katılan son 5 numara sergilenecektir.
    </p>
    <p>
      Ekran oynatıcısında bir numaraya tıkladığınızda o numara Çekiliş
      numaralarından bağımsız olarak bir vurgu.
    </p>
    <p>
      Bingo'ya tıkladığınızda! butonuna bastığınızda numaralarınız
      doğrulanacaktır. Eğer bir Bingo gerçekleşmezse bir ihtar alacaksınız, üç
      ihtarla o turdan elenecektir. Bingo gerçekleşirse, tur Bitirdiğinizde
      adınız tüm oyuncuların ekranlarında görüntülenecektir.
    </p>
  </>
);

const en = {
  home: {
    btn1: "Join room",
    btn2: "Create room",
  },
  createRoom: {
    createRoom: {
      title: "Create Room",
      label1: "ROOM NAME: ",
      label2: "BALLS AMOUNT (50 - 99): ",
      btn: "Join",
      warning: "Room unavailable, try another name.",
    },
    waitRoom: {
      title: "ROOM ID: ",
      subtitle: "Balls amount: ",
      btn: "Start",
      title2: "Waiting players... ",
      subtitle2: "is here.",
      title3: "Instructions",
      instructions: en_instructions,
    },
    playRoom: {
      title: "Raffling off balls...",
      btn: "Raffle",
    },
    bingo: {
      title: "Won!",
    },
  },
  joinRoom: {
    joinRoom: {
      title: "Joing Room",
      label1: "YOUR NAME: ",
      label2: "ROOM ID: ",
      btn: "Join",
    },
    waitRoom: {
      title: "Waiting to start...",
      subtitle: "Your numbers:  ",
      subtitle2: "Creating paper",
      subtitle3: "is here!",
      title2: "Instructions",
      title3: "Waiting players...",
      instructions: en_instructions,
    },
    playRoom: {
      title: "The game is on",
      btn: "BINGO!",
      bingoDisplay: {
        title: "last 5 numbers:",
      },
    },
    bingo: {
      title: "won!",
    },
  },
};

const pt_instructions = (
  <>
    <p>
      Todos os jogadores que entrarem antes do início da partida, receberão seus
      números do bingo. Essa sequência de números é gerada aleatoriamente e é
      única entre os jogadores da partida.
    </p>
    <p>
      As bolas sorteadas aparecerão na tela do host. Na tela da jogadora serão
      exibidas as últimas 5 bolas sorteadas.
    </p>
    <p>
      Na tela da jogadora, ao clicar no número, ele será destacado
      independentemente das bolas sorteadas.
    </p>
    <p>
      Ao clicar no botão bingo!, os números serão validados. Caso seja falso, a
      jogadora leva uma penalidade. Com três penalidades, a jogadora é eliminada
      da partida. Caso ocorra o bingo ocorra, a partida se encerra e a vencedora
      é exibida na tela de todos participantes.
    </p>
  </>
);

const pt = {
  home: {
    btn1: "Join room",
    btn2: "Create room",
  },
  createRoom: {
    createRoom: {
      title: "Oda Oluştur",
      label1: "ODA ADI: ",
      label2: "SAYI DEĞERİ (50 - 99): ",
      btn: "Katıl",
      warning: "Oda musait değil.",
    },
    waitRoom: {
      title: "Oda ID: ",
      subtitle: "Numara: ",
      btn: "Başla",
      title2: "Oyuncular bekleniyor... ",
      subtitle2: "katıldı.",
      title3: "Talimatlar",
      instructions: en_instructions,
    },
    playRoom: {
      title: "Raffling off balls...",
      btn: "Raffle",
    },
    bingo: {
      title: "Won!",
    },
  },
  joinRoom: {
    joinRoom: {
      title: "Odaya katıl",
      label1: "İsim: ",
      label2: "Oda ID: ",
      btn: "Katıl",
    },
    waitRoom: {
      title: "Oyuncular bekleniyor...",
      subtitle: "Senin numaraların:  ",
      subtitle2: "Kağıt oluştur",
      subtitle3: "katıldı!",
      title2: "talimatlar",
      title3: "Oyuncular bekleniyor...",
      instructions: en_instructions,
    },
    playRoom: {
      title: "Oyun başladı",
      btn: "Tombala!",
      bingoDisplay: {
        title: "Son 5 numara:",
      },
    },
    bingo: {
      title: "Kazandın!",
    },
  },
};

export default { pt, en };
