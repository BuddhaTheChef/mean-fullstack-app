import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
    // posts = [
    //     {title: 'First Post', content: 'This is the first post\'s contnent!'},
    //     {title: 'Second Post', content: 'This is the second post\'s contnent!'},
    //     {title: 'Third Post', content: 'This is the third post\'s contnent!'},
    //     {title: 'Fourth Post', content: 'This is the fourth post\'s contnent!'},
    //     {title: 'Fifth Post', content: 'This is the fifth post\'s contnent!'},
    //     {title: 'Sixth Post', content: 'This is the sixth post\'s contnent!'},
    // ];
    @Input() posts: Post[] = [];
}
