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
} from "@nextui-org/react";
import { TbEdit, TbPlus } from "react-icons/tb";

export default function EditCrewModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} isIconOnly>
        <TbEdit />
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
                Edit Member
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent=""
                  label="Member Name"
                  placeholder="Change name"
                  variant="bordered"
                />
                <Input
                  endContent=""
                  label="Member Role"
                  placeholder="Change role"
                  variant="bordered"
                />
                <Input
                  endContent=""
                  label="Member Email"
                  placeholder="Change email"
                  variant="bordered"
                />
                <Input
                  endContent=""
                  label="Member Phone"
                  placeholder="Change phone number"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between"></div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Save Member
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
