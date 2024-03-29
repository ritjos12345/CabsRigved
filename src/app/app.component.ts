import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { ElementFinder } from 'protractor';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { SelectionModel } from '@angular/cdk/collections';
import { Task } from './services/task';
//import { Driverf4Component } from './dialogs/driverf4/driverf4.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public dataSource = [];
  public driverDetails = [];

  selection = new SelectionModel<Task>(true, []);
  displayedColumns = ['select', 'name', 'pickup_time', 'pickup_loc', 'drop_loc', 'drop_time', 'driver_name', 'id'];//, 'actions'
  //options = [{ name: 'Driver1', number: 'MH01AB12345' }, { name: 'Driver12', number: 'MH01AB12346' }, { name: 'Driver23', number: 'MH01AB12347' }];
  constructor(private _dataService: DataService, private dialog: MatDialog) { }

  ngOnInit() {
    this._dataService.getTask()
      .subscribe(data => this.dataSource = data);
    this._dataService.getDriverdetails()
      .subscribe(data => this.driverDetails = data);
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.forEach(row => this.selection.select(row));
  }

  refresh() {

  }
  changeModel() {
    console.log(this);
  }
  updateModel(e){
    console.log(e);
  }
  Submit() {
    let data = this.selection.selected;
    console.log(data);
  }
  // addNew(issue: Issue) {
  //   const dialogRef = this.dialog.open(AddDialogComponent, {
  //     data: { issue: issue }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result === 1) {
  //       // After dialog is closed we're doing frontend updates
  //       // For add we're just pushing a new row inside DataService
  //       this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
  //       this.refreshTable();
  //     }
  //   });
  // }

  addNew() {



  }

  //   startEdit(i: number, id: number, name: string, pickup_loc: string, pickup_time: string, drop_loc: string, drop_time: string) {
  //     this.id = id;
  //     // index row is used just for debugging proposes and can be removed
  //     this.index = i;
  //     console.log(this.index);
  //     const dialogRef = this.dialog.open(EditDialogComponent, {
  //       data: { id: id, name: name, pickup_loc: pickup_loc, pickup_time: pickup_time, drop_loc: drop_loc, drop_time: drop_time }
  //     });

  //     dialogRef.afterClosed().subscribe(result => {
  //       if (result === 1) {
  //         // When using an edit things are little different, firstly we find record inside DataService by id
  //         const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
  //         // Then you update that record using data from dialogData (values you enetered)
  //         this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
  //         // And lastly refresh table
  //         this.refreshTable();
  //       }
  //     });
  //   }

  //   deleteItem(i: number, id: number, title: string, state: string, url: string) {
  //     this.index = i;
  //     this.id = id;
  //     const dialogRef = this.dialog.open(DeleteDialogComponent, {
  //       data: { id: id, title: title, state: state, url: url }
  //     });

  //     dialogRef.afterClosed().subscribe(result => {
  //       if (result === 1) {
  //         const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
  //         // for delete we use splice in order to remove single object from DataService
  //         this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
  //         this.refreshTable();
  //       }
  //     });
  //   }


  //   private refreshTable() {
  //     // Refreshing table using paginator
  //     // Thanks yeager-j for tips
  //     // https://github.com/marinantonio/angular-mat-table-crud/issues/12
  //     this.paginator._changePageSize(this.paginator.pageSize);
  //   }


  //   /*   // If you don't need a filter or a pagination this can be simplified, you just use code from else block
  //     // OLD METHOD:
  //     // if there's a paginator active we're using it for refresh
  //     if (this.dataSource._paginator.hasNextPage()) {
  //       this.dataSource._paginator.nextPage();
  //       this.dataSource._paginator.previousPage();
  //       // in case we're on last page this if will tick
  //     } else if (this.dataSource._paginator.hasPreviousPage()) {
  //       this.dataSource._paginator.previousPage();
  //       this.dataSource._paginator.nextPage();
  //       // in all other cases including active filter we do it like this
  //     } else {
  //       this.dataSource.filter = '';
  //       this.dataSource.filter = this.filter.nativeElement.value;
  //     }*/

  //   public loadData_sec() {
  //     this.exampleDatabase = new DataService(this.httpClient);
  //     fromEvent(this.filter.nativeElement, 'keyup')
  //       // .debounceTime(150)
  //       // .distinctUntilChanged()
  //       .subscribe(() => {
  //         if (!this.dataSource) {
  //           return;
  //         }
  //         this.dataSource.filter = this.filter.nativeElement.value;
  //       });
  //   }

  //   public loadData() {
  //     this.exampleDatabase = new DataService(this.httpClient);
  //     this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
  //     fromEvent(this.filter.nativeElement, 'keyup')
  //       // .debounceTime(150)
  //       // .distinctUntilChanged()
  //       .subscribe(() => {
  //         if (!this.dataSource) {
  //           return;
  //         }
  //         this.dataSource.filter = this.filter.nativeElement.value;
  //       });
  //   }
  // }

  // export class ExampleDataSource extends DataSource<Issue> {
  //   _filterChange = new BehaviorSubject('');

  //   get filter(): string {
  //     return this._filterChange.value;
  //   }

  //   set filter(filter: string) {
  //     this._filterChange.next(filter);
  //   }

  //   filteredData: Issue[] = [];
  //   renderedData: Issue[] = [];

  //   constructor(public _exampleDatabase: DataService,
  //     public _paginator: MatPaginator,
  //     public _sort: MatSort) {
  //     super();
  //     // Reset to the first page when the user changes the filter.
  //     this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  //   }

  //   /** Connect function called by the table to retrieve one stream containing the data to render. */
  //   connect(): Observable<Issue[]> {
  //     // Listen for any changes in the base data, sorting, filtering, or pagination
  //     const displayDataChanges = [
  //       this._exampleDatabase.dataChange,
  //       this._sort.sortChange,
  //       this._filterChange,
  //       this._paginator.page
  //     ];

  //     this._exampleDatabase.getAllIssues();


  //     return merge(...displayDataChanges).pipe(map(() => {
  //       // Filter data
  //       this.filteredData = this._exampleDatabase.data.slice().filter((issue: Issue) => {
  //         const searchStr = issue.id;//(issue.id + issue.name + issue.title + issue.pickup_time).toLowerCase();
  //         return searchStr;//.indexOf(this.filter.toLowerCase()) !== -1;
  //       });

  //       // Sort filtered data
  //       const sortedData = this.sortData(this.filteredData.slice());

  //       // Grab the page's slice of the filtered sorted data.
  //       const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
  //       this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
  //       return this.renderedData;
  //     }
  //     ));
  //   }

  //   disconnect() { }


  //   /** Returns a sorted copy of the database data. */
  //   sortData(data: Issue[]): Issue[] {
  //     if (!this._sort.active || this._sort.direction === '') {
  //       return data;
  //     }

  //     return data.sort((a, b) => {
  //       let propertyA: number | string = '';
  //       let propertyB: number | string = '';

  //       switch (this._sort.active) {
  //         case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
  //         case 'title': [propertyA, propertyB] = [a.title, b.title]; break;
  //         case 'state': [propertyA, propertyB] = [a.state, b.state]; break;
  //         case 'url': [propertyA, propertyB] = [a.url, b.url]; break;
  //         case 'created_at': [propertyA, propertyB] = [a.created_at, b.created_at]; break;
  //         case 'updated_at': [propertyA, propertyB] = [a.updated_at, b.updated_at]; break;
  //       }

  //       const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
  //       const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

  //       return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
  //     });
  //   }
}
