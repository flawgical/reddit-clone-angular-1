(function() {
    'use strict'

    angular.module("app", [])
        .component('postForm', {
            controller: function() {
                const vm = this;
                vm.posts = [];
                vm.comments = [];
                vm.addPost = function addPost() {
                    vm.post.created_at = Date.now();
                    vm.posts.push(vm.post);
                    delete vm.post; //this is so it deletes the object so you start over with the next post. Instead of having the post repeated.
                    console.log(vm.posts);
                }
                vm.addComment = function addComment() {
                    vm.comment.created_at = Date.now();
                    vm.comments.push(vm.comment);
                    delete vm.comment;
                    console.log(vm.comments);

                }

            },
            templateUrl: "postForm.html",
        });


}())
