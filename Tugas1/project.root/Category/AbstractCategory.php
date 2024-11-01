<?php
namespace Category;

abstract class AbstractCategory {
    protected $name;
    protected $description;

    public function __construct($name, $description) {
        $this->name = $name;
        $this->description = $description;
    }

    abstract public function getCategoryInfo();
}
?>
