import { Component,  ChangeDetectionStrategy, } from '@angular/core';
import { NbIconConfig } from '@nebular/theme';



@Component({
  selector: 'app-parent',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent  {

  disabledIconConfig: NbIconConfig = { icon: 'settings-2-outline', pack: 'eva' };

}
