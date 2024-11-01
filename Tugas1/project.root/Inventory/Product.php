<?php
namespace Inventory;

use Traits\Logger;
use Category\Category;

class Product {
    use Logger;

    private $name;
    private $price;
    private $category;

    public function __construct($name, $price, Category $category) {
        $this->name = $name;
        $this->price = $price;
        $this->category = $category;
        $this->log("Product created: {$this->name}");
    }

    // Magic method untuk mengakses properties yang tidak terlihat
    public function __get($property) {
        if (property_exists($this, $property)) {
            return $this->$property;
        }
    }

    public function __set($property, $value) {
        if (property_exists($this, $property)) {
            $this->$property = $value;
        }
    }

    public function getProductInfo() {
        return "Product: {$this->name}, Price: {$this->price}, " . $this->category->getCategoryInfo();
    }

    public function __toString() {
        return $this->getProductInfo();
    }
}
?>
