import { trigger, transition, query, stagger, animateChild, style, animate, state } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

interface Work {
  title: string;
  description: string;
  link: string;
  techs: string[];
}

const WORKS: Work[] = [
  {
    title: 'Star Classification',
    description: 'Star classification using classical ML models like SVM, Random Forest, Decision Tree and Naive Bayes.',
    link: 'https://github.com/marcoripa96/stellar_classification',
    techs: ['R']
  },
  {
    title: 'OAMA',
    description: 'Chat application based on rooms as a web application.',
    link: 'https://github.com/marcoripa96/OAMA_chat',
    techs: ['Angular', 'Express', 'MongoDB']
  },
  {
    title: 'Question Answering',
    description: 'Knowledge graph and free text question answering implementation and comparison.',
    link: 'https://github.com/marcoripa96/question_answering_comparison',
    techs: ['Angular', 'Python', 'Flask']
  },
  {
    title: 'Network Analysis',
    description: 'Network analysis and sentiment prediction on a subset of Amazon products.',
    link: 'https://github.com/marcoripa96/network_analysis',
    techs: ['Python', 'R', 'Dash']
  },
  {
    title: 'Clothing reccomendation',
    description: 'Clothing reccomendation using Neural Networks and handcrafted features.',
    link: 'https://github.com/marcoripa96/clothing_recommendation',
    techs: ['Python', 'Telegram']
  },
  {
    title: 'Personalized Search Engine',
    description: 'Personalized search engine based on tweets from multiple famous people.',
    link: 'https://github.com/marcoripa96/personalized_search_engine',
    techs: ['Python', 'ElasticSearch', 'Angular']
  },
  {
    title: 'Toxic comment classification',
    description: 'Multilabel classification on comments from Wikipedia edit pages using BERT and RNNs.',
    link: 'https://github.com/marcoripa96/toxic_comment_classification',
    techs: ['Python', 'Tensorflow', 'Keras']
  }
]

@Component({
  selector: 'works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  animations: [
    trigger('list', [
      transition('* => true', [
        query('@*',
          stagger(100, animateChild())
        )
      ])
    ]),
    trigger('enterBottom', [
      state('false', style({ opacity: 0, transform: 'translateY(60px)'})),
      state('true', style({  opacity: 1, transform: 'translateY(0)' })),
      transition('false => true', animate('300ms cubic-bezier(0.645,0.045,0.355,1)')),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorksComponent implements OnInit {

  intersecting: boolean = false;

  readonly works = WORKS;

  constructor() { }

  ngOnInit() {
  }

  onIntersection(entries: any): void {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        this.intersecting = true;
      }
    });
  }

}
