import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractStatusBarComponent } from '../contract-bar-status/contract-bar-status';
import { UserListComponent } from "../../../user/user";


@Component({
  selector: 'app-contracts',
  standalone: true,
  styleUrls: ['./contract.scss'],
  imports: [
    CommonModule,
    ContractStatusBarComponent // 🔥 REQUIRED
    ,
    UserListComponent
],
  templateUrl: './contract.html',
})
export class ContractsComponent {
 contracts = [
  {
    number: 'BDRS/2016/019/0008',
    vendor: 'البنك الوطني القطري',
    logo: 'assets/qnb.png',
    date: '22 يناير 2025',
    progress: 20,
  },
  {
    number: 'BDRS/2016/019/0009',
    vendor: 'أوريدو قطر',
    logo: 'assets/ooredoo.png',
    date: '20 يناير 2025',
    progress: 50,
  },

  // ✅ NEW CONTRACTS
  {
    number: 'BDRS/2016/019/0010',
    vendor: 'صناعات قطر',
    logo: 'assets/industries.png',
    date: '24 يناير 2025',
    progress: 80,
  },
  {
    number: 'BDRS/2016/019/0011',
    vendor: 'وقود قطر',
    logo: 'assets/woqod.png',
    date: '26 يناير 2025',
    progress: 35,
  },
  {
    number: 'BDRS/2016/019/0012',
    vendor: 'كهرماء',
    logo: 'assets/kahramaa.png',
    date: '28 يناير 2025',
    progress: 65,
  },
  {
    number: 'BDRS/2016/019/0010',
    vendor: 'صناعات قطر',
    logo: 'assets/industries.png',
    date: '24 يناير 2025',
    progress: 80,
  },
  {
    number: 'BDRS/2016/019/0011',
    vendor: 'وقود قطر',
    logo: 'assets/woqod.png',
    date: '26 يناير 2025',
    progress: 35,
  },
  {
    number: 'BDRS/2016/019/0012',
    vendor: 'كهرماء',
    logo: 'assets/kahramaa.png',
    date: '28 يناير 2025',
    progress: 65,
  },
];

}
