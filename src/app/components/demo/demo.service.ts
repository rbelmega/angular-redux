import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {
  loadDemoPending,
  loadDemoSuccess,
  loadDemoFailure,
} from './demo.actions';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DemoService {
  constructor(
    private store: Store<any>,
    private http: HttpClient
  ) {
  }

  sendData(store) {
    return this.http.post('/send-store', store)
  }

  loadDemoData({id}): void {
    this.store.dispatch(loadDemoPending({id}));

    setTimeout(() => {


      try {
        const success = Math.random() < 0.43;

        if (!success) {
          throw 'I am Error';
        }

        this.store.dispatch(loadDemoSuccess({
          data: {
            id,
            text: this.gerQuote()
          }
        }));


      } catch (error) {
        this.store.dispatch(loadDemoFailure({error, id}));
      }
    }, Math.random() * 4000)
  }

  gerQuote() {
    const quotes = [
      "“Help me, Obi-Wan Kenobi. You’re my only hope.” — Leia Organa",
      "“I find your lack of faith disturbing.” — Darth Vader",
      "“It’s the ship that made the Kessel run in less than twelve parsecs. I’ve outrun Imperial starships. Not the local bulk cruisers, mind you. I’m talking about the big Corellian ships, now. She’s fast enough for you, old man.” — Han Solo",
      "“The Force will be with you. Always.” — Obi-Wan Kenobi",
      "“Why, you stuck-up, half-witted, scruffy-looking nerf herder!” — Leia Organa",
      "“Never tell me the odds!” — Han Solo",
      "“Do. Or do not. There is no try.” — Yoda",
      "“No. I am your father.” — Darth Vader",
      "“When gone am I, the last of the Jedi will you be. The Force runs strong in your family. Pass on what you have learned.” — Yoda",
      "“I’ll never turn to the dark side. You’ve failed, your highness. I am a Jedi, like my father before me.” — Luke Skywalker",
      "“Now, young Skywalker, you will die.” — Emperor Palpatine",
      "“Just for once, let me look on you with my own eyes.” — Anakin Skywalker",
      "“There’s always a bigger fish.” — Qui-Gon Jinn",
      "“In time, the suffering of your people will persuade you to see our point of view.” — Nute Gunray",
      "“You can’t stop the change, any more than you can stop the suns from setting.” — Shmi Skywalker",
      "“Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate leads to suffering. I sense much fear in you.” — Yoda",
      "“Well, if droids could think, there’d be none of us here, would there?” — Obi-Wan Kenobi",
      "“We must keep our faith in the Republic. The day we stop believing democracy can work is the day we lose it.” — Queen Jamillia",
      "“I’m just a simple man trying to make my way in the universe.” — Jango Fett",
      "“What if I told you that the Republic was now under the control of a Dark Lord of the Sith?” — Count Dooku",
      "“The dark side of the Force is a pathway to many abilities some consider to be unnatural.” — Chancellor Palpatine",
      "“Power! Unlimited power!” — Darth Sidious",
      "“So this is how liberty dies. With thunderous applause.” — Padmé Amidala",
      "“You were my brother, Anakin. I loved you.” — Obi-Wan Kenobi",
      "“Oh, my dear friend. How I’ve missed you.” — C-3PO"
    ];

    return quotes[Math.floor(Math.random() * quotes.length)];
  }
}
