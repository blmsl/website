import { IBannerInfo } from 'app/shared/ibanner-info';
import {
  Component,
  Input,
  ViewEncapsulation,
  ElementRef,
  ViewChild,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';
import { MnFullpageService } from 'ngx-fullpage';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: '[app-home-banner]',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent  implements OnChanges, OnDestroy, OnInit {

  readonly CHANGE_TYPE_BREAKPOINT: number = 1024;
  readonly IMAGE_TYPE: string = 'image';
  readonly VIDEO_TYPE: string = 'video';

  @Input() info: IBannerInfo;
  @Input() isActiveSlide: boolean;

  @ViewChild('videoElement') videoElement: ElementRef;


  constructor(private fullpageService: MnFullpageService) {
  }

  ngOnInit() {
    this.fullpageService.reBuild();
  }

  ngOnChanges() {
    if (this.isActiveSlide) {
      this.videoElement.nativeElement.play();
    }
  }

  ngOnDestroy() {
    this.fullpageService.destroy('all');
  }
}
