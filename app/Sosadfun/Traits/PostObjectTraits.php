<?php
namespace App\Sosadfun\Traits;

use Cache;

trait PostObjectTraits{

    public function findPost($id)
    {
        return Cache::remember('post.'.$id, 5, function () use($id){
             $post = \App\Models\Post::find($id);
             if($post){$post->load('author.title');}
             return $post;
        });
    }

    public function postProfile($id)
    {
        return Cache::remember('postProfile.'.$id, 5, function () use($id) {
            $post = \App\Models\Post::find($id);
            if(!$post){
                return;
            }
            $post->load('author.title','tags');
            if($post&&$post->type==='chapter'){
                $post->load('chapter');
            }
            if($post&&$post->type==='review'){
                $post->load('review.reviewee');
            }
            if($post&&$post->type==='question'){
                $post->load('answers');
            }
            if($post&&$post->type==='answer'){
                $post->load('question');
            }
            $post->setAttribute('new_replies', $post->newest_replies());
            $post->setAttribute('recent_rewards', $post->latest_rewards());
            $post->setAttribute('recent_upvotes', $post->latest_upvotes());

            return $post;
        });
    }

    public function clearPost($id)
    {
        Cache::forget('postProfile.'.$id);
        Cache::forget('post.'.$id);
    }

    public function refreshPost($id)
    {
        $this->clearPost($id);
        $this->findPost($id);
        return $this->postProfile($id);
    }

}
