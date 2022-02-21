<?php
$title = "Générer des Spécifications Techniques";
$description = "Sélectionner un ou plusieurs leviers pour générer les spécifications techniques correspondantes";
?>
<form method="GET" class="stack-column min-container">
    <?php foreach ($items as $key => $items): ?>
        <fieldset>
            <legend><?= ucfirst($key); ?></legend>
            <div class="multiple-checkbox">
            <?php foreach ($items as $item): ?>
                <div>
                    <input type="checkbox" id="<?= $item['value']; ?>" name="<?= $item['value']; ?>">
                    <label for="<?= $item['value']; ?>"><?= $item['name']; ?></label>
                </div>
            <?php endforeach ?>
            </div>
        </fieldset>
    <?php endforeach ?>
    <div class="form-submit">
      <button class="button-primary" type="submit">Générer</button>
    </div>
</form>
