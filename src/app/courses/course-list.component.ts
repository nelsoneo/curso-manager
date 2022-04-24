import { APP_BOOTSTRAP_LISTENER, Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 4.5,
                realeseDate: 'April, 2022'
            },
            {
                id: 2,
                name: 'Angular: HTPP',
                imageUrl: '',
                price: 50.99,
                code: 'NHG-8996',
                duration: 80,
                rating: 4,
                realeseDate: 'March, 2022'
            }
        ]
    }
}