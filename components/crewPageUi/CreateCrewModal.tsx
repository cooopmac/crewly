"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
  Textarea,
} from "@nextui-org/react";
import { TbPlus } from "react-icons/tb";

export default function CreateCrewModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary" startContent={<TbPlus />}>
        Create Crew
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create Crew
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  labelPlacement="outside"
                  endContent=""
                  label="Crew Name"
                  placeholder="Enter name"
                  variant="bordered"
                  isRequired
                />
                <Textarea
                  variant="bordered"
                  label="Description"
                  labelPlacement="outside"
                  placeholder="Enter your description"
                  className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                />
                <div className="flex py-2 px-1 justify-between"></div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Save Crew
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
