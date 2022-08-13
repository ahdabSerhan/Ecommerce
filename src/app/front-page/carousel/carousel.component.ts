import { Component, OnInit } from "@angular/core";
import { CarouselInfo } from "src/app/interface/ec-template.interface";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
})
export class CarouselComponent implements OnInit {
  data: CarouselInfo[] = [
    {
      title: "Carousel Title",
      description: "Carousel Description",
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F07%2F15%2F0715fd899a298e5aa9f0f3e31fcd61d944464768.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      button: { display: false },
    },
    {
      title: "Carousel Title",
      description: "Carousel Description",
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff4%2F55%2Ff455a29b69db638cad0eeda8261d0ea58ca21bfd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      button: { display: false },
    },
    {
      title: "Carousel Title",
      description: "Carousel Description",
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ffd%2Ffc%2Ffdfc69c02c496ffe0145ccc83554bdce64091eab.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_dresses_aline%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      button: { display: true, content: "button content", href: "#" },
    },
  ];

  constructor() {}

  ngOnInit() {}
}
