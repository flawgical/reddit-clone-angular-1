(function() {
    'use strict'

    angular.module("app", [])
        .component('postForm', {
            controller: function() {
                const vm = this;
                vm.posts = [];
                vm.addPost = function addPost() {
                    vm.posts.push(vm.post)
                    delete vm.post //this is so it deletes the object so you start over with the next post. Instead of having the post repeated.
                    console.log(vm.posts);
                }

            },
            templateUrl: "postForm.html",
        });


}())
