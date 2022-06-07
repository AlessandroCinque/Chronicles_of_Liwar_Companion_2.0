export class Members 
{
    name: string= ""
    AF: number = 0
    AM: number = 0
    M: number = 0
    Spare: number = 14
    MAX_Spare:number = 14

    constructor(name: string)
    {
        this.name = name
    }
    //ALL the Setters work BOTH WAYS


    Set_AF(value:number)
    {
        if (value > 0)
        {
            this.Spare = this.Spare - 1

            if(this.Spare >= 0)// Maybe AF has also a max value
            {
                this.AF += 1
            }
            else
            {
                this.Spare = 0
            }

        }
        else
        {
            if( this.AF !=0)
            {
                this.Spare += 1
            }
            

            if(this.Spare <= this.MAX_Spare && this.AF > 0)
            {
                this.AF = this.AF -1
            }
            else if( this.AF !=0)
            {
                this.Spare = this.MAX_Spare
            }
        }
        
       
    }
    Set_AM(value:number)
    {
        if (value > 0)
        {
            this.Spare = this.Spare - 1

            if(this.Spare >= 0)// Maybe AM has also a max value
            {
                this.AM += 1
            }
            else
            {
                this.Spare = 0
            }

        }
        else
        {
            if( this.AM !=0)
            {
                this.Spare += 1
            }
            

            if(this.Spare <= this.MAX_Spare && this.AM > 0)
            {
                this.AM = this.AM -1
            }
            else if( this.AM !=0)
            {
                this.Spare = this.MAX_Spare
            }
        }
    }
    Set_M(value:number)
    {

        this.M += value
    }

    Get_Spare()
    {
        return this.Spare
    }

}