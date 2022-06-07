import { Component, OnInit } from '@angular/core';
import { Members } from '../Members/members';


@Component({
  selector: 'app-warband-panel',
  templateUrl: './warband-panel.component.html',
  styleUrls: ['./warband-panel.component.css']
})
export class WarbandPanelComponent implements OnInit 
{
  MyMapLikeType = new Map<string, Members[]>();
  myWarNameS : string []= []
  myMembers: Members[] =[]
  

  BandName : string = ""
  MemberName : string = ""

  constructor() { }

  ngOnInit(): void {
  }

  AddWarband()
  {
    this.myWarNameS.push(this.BandName)
    //document.getElementById('ButtonX') as HTMLElement;
    console.log(this.myWarNameS)
    this.MyMapLikeType.set(this.BandName, []);
    console.log(this.MyMapLikeType)

    this.BandName = ""
  }

  AddMember(index : any)
  {
    var tempMemb = new Members(this.MemberName)
    //this.myMembers.push(tempMemb)
    var tempValue: Members[] =this.MyMapLikeType.get(index)!
    tempValue?.push(tempMemb)

    this.MyMapLikeType.set(index, tempValue);
    console.log(this.MyMapLikeType)

  }
}
