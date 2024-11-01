<?php
namespace Category;

class Category extends AbstractCategory {
    public function getCategoryInfo() {
        return "Category: {$this->name}, Description: {$this->description}";
    }
}
?>
