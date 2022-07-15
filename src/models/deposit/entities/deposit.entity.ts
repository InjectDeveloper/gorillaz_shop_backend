import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IDeposit } from "../interfaces/deposit.interface";
import { User } from "../../user/entities/user.entity";
import { DepositStatusesEnum } from "../constants/deposit-statuses.enum";
import { DepositTypesEnum } from "../constants/deposit-types.enum";

@Entity({ name: "deposits" })
export class Deposit implements IDeposit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.deposits)
  user: User;

  @Column({ type: "real" })
  sum: number;

  @Column({default: ""})
  data: string;

  @Column({
    type: "enum",
    enum: DepositStatusesEnum,
    default: DepositStatusesEnum.IN_PROCESS
  })
  status: DepositStatusesEnum;

  @Column({
    type: "enum",
    enum: DepositTypesEnum
  })
  type: DepositTypesEnum;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date
}

/*
Когда я был неизвестен, они все боялись (Тс-с) (Lorenz, don't stop)
Я скрывал потенциал, типа я стесняюсь (Squa')
Я не пожал им руку, потому что не знакомы (Ах)
Я не пожал им руку, чтобы знали: я всё помню (Фш)
Я не начну диалог с тобой, нам не о чём
А? (М?; Wex on the beat) Это моя машина?

Водила чувствует мой вайб, он начинает шашковать (Ай)
Молодой BUSHIDO ZHO, я должен всё забрать (Ай)
Еду двести двадцать, чтоб работать, а не спать (Ай)
Тебе тут нечего ловить, и я не буду врать (Ай)

Водила чувствует мой вайб, он понимает, с кем он едет (Skrrt-skrrt)
Видишь моё имя в чартах, бро, ты хочешь кредит (Пау)
Мне плевать, что ты базаришь, бро, он просто бредит
(Nah, nah, nah) И к чему все разговоры, что—
Не, он дальше не уедет (Pow, gang, hold on)

Как видишь, я уехал
Под моею жопой Бэха, и мои идеи успешные (Многие, да)
Вы все для меня смешные
Я буду откровенным, что мои поступки грешные (Эй, эй, эй, не все, наверное)

Я держу Nin'у, я не могу спать (Nah, nah, nah)
Если лягу с нею, то я сломаю кровать (Damn, у)
Хочешь, чтоб я выступил за сотку k
Ты допустил ошибку, ведь там не хватает нолика (Лямчик, бай)

Со мной красивая thot (Ау)
У неё большая жопа, она трётся об мой glock (Пр-р)
I got big racks, feelin' like I'm Key Glock (Пр-р)
BUSHIDO ZHO — реальный thug, тебя финесит твой plug (Ау)
У меня есть шутер и он выглядит как Дональд Дак (Scally)
И если со мной шутишь, то, а, ладно... (Пр-р)
Я стелю гладко (У)
Так много детей — в рэпе я трэп-матка (Мама)
Скажи, в чём сила, братка? (Ха, е, go)

Водила чувствует мой вайб — он начинает шашковать (Ай)
Молодой BUSHIDO ZHO, я должен всё забрать (Ай)
Еду двести двадцать, чтоб работать, а не спать (Ай)
Тебе тут нечего ловить, и я не буду врать (Ай)

Водила чувствует мой вайб, он понимает, с кем он едет (Skrrt-skrrt)
Видишь моё имя в чартах, бро, ты хочешь кредит (Пау)
Мне плевать, что ты базаришь, бро, он просто бредит
(Nah, nah, nah) И к чему все разговоры, что—
Не, он дальше не уедет (Pow, gang, hold on, б-р-р-р)

Е, gang, hold on Get it, пау-крау-пау (Фью) Кхм-Кхм-Кхм
*/
